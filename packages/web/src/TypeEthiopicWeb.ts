import { TypeEthiopic, KeyboardLayout } from '@type-ethiopic/core';
export type Input = HTMLInputElement | HTMLTextAreaElement;
export class TypeEthiopicWeb extends TypeEthiopic {
    public on: boolean;
    private input: Input;

    constructor(input: Input, layouts: Record<string, KeyboardLayout>, on = true) {
        super(layouts);

        this.on = on;
        this.input = input;
        this.addEvents();
    }
    private addEvents(): void {
        this.input.addEventListener('keydown' as const, (e) => {
            //eslint-disable-next-line
            this.keyDownEventHandler(e as any);
        });
        this.input.addEventListener('focusout', () => {
            this.focusOutEventHandler();
        });
    }
    private changeInputValue(newValue: string): void {
        const e = new window.Event('input', { bubbles: true });
        this.setNativeValue(this.input, newValue);
        this.input.dispatchEvent(e);
    }
    private writeSymbol(symbol: string, replace: boolean): void {
        const index = this.input.selectionStart || 0;
        if (replace) {
            this.changeInputValue(this.input.value.substring(0, this.input.value.length - 1) + symbol);
        } else {
            this.changeInputValue(this.insertStringAt(this.input.value, symbol, index));
        }
    }
    private resolveSymbol(event: KeyboardEvent): boolean {
        if (event.ctrlKey || event.shiftKey || event.altKey || event.metaKey) {
            return false;
        } else {
            event.preventDefault();
            return true;
        }
    }
    private keyDownEventHandler(event: KeyboardEvent): void {
        if (this.on) {
            if (this.keyBlacklist.indexOf(event.key) === -1) {
                const char = event.key;
                const { symbol, replace } = this.write(char);
                if (this.resolveSymbol(event)) {
                    this.writeSymbol(symbol, replace);
                }
            } else {
                this.resetScope();
            }
        }
    }
    private focusOutEventHandler(): void {
        if (this.on) {
            this.resetScope();
        }
    }
    private insertStringAt(string: string, stringToInsert: string, index: number): string {
        if (index > 0) {
            return string.substring(0, index) + stringToInsert + string.substr(index);
        }
        return stringToInsert + string;
    }
    private setNativeValue(element: Input, value: string): void {
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
        prototypeValueSetter?.call(element, value);
    }
}
