import { toSequence, setDeep, toPath } from './utils';
import { ObjectPath } from './interfaces';
import { KeyboardLayout } from '@type-ethiopic/core';
const generateKeymap = (keys: string[]) => {
    const keymap: Record<string, string[]> = {};
    keys.forEach((key) => {
        const combination = toSequence(key);
        keymap[key] = combination;
    });
    return keymap;
};
const filterKeys = (row: Record<string, string>, keyCol: string, defaultCol: string): string[] => {
    return Object.keys(row).filter((k) => {
        return k !== keyCol && k !== defaultCol && row[k].trim();
    });
};
const setSymbolMap = (layout: KeyboardLayout, value: string, path: ObjectPath): void => {
    const symbolMap = { value, next: null };
    setDeep(layout, path, symbolMap);
};

export const generateMapForRow = (
    layout: KeyboardLayout,
    row: Record<string, string>,
    keyCol = 'KEY',
    defaultCol = '_',
): void => {
    const primaryPaths = toPath(toSequence(row[keyCol]));
    for (const primary of primaryPaths) {
        setSymbolMap(layout, row[defaultCol], `${primary}`);
        const relevantKeys = filterKeys(row, keyCol, defaultCol);
        const keymap = generateKeymap(relevantKeys);
        for (const key of relevantKeys) {
            const paths = toPath(keymap[key], primary);
            for (const path of paths) {
                setSymbolMap(layout, row[key], path);
            }
        }
    }
};
