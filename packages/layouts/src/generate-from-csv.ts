import { generateMapForRow } from '@type-ethiopic/layout-generator';
import csvParser from 'csv-parser';
import fs from 'fs';
import layouts from './layouts';
const punctuation = {};
fs.createReadStream(`${__dirname}/csv/punctuation.csv`)
    .pipe(csvParser())
    .on('data', (row) => {
        generateMapForRow(punctuation, row);
    })
    .on('end', () => {
        console.log('layout successfully generated for punctuation');
    });
for (const [code, { name, path }] of Object.entries(layouts)) {
    const layout = {};
    fs.createReadStream(`${__dirname}/csv/${path}.csv`)
        .pipe(csvParser())
        .on('data', (row) => {
            generateMapForRow(layout, row);
        })
        .on('end', () => {
            console.log(`layout successfully generated for ${name}`);
            const meta = {
                name,
                regions: code.split('_'),
            };
            fs.writeFileSync(
                `${__dirname}/${code}.ts`,
                `export default  ${JSON.stringify({ meta, layout: { ...layout, ...punctuation } })};`,
            );
        });
}
// write index indexFile  fs.writeFileSync(
fs.writeFileSync(`${__dirname}/index.ts`, `export default ${JSON.stringify(layouts)};`);
