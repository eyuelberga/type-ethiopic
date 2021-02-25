## @type-ethiopic/web

Add Ethiopic typing functionality to your web applications.

## Installation

```sh
$ yarn add @type-ethiopic/web

# or

$ npm install @type-ethiopic/web
```

## Basic usage

```javascript
import { TypeEthiopicWeb } from '@type-ethiopic/web';

// keyboard layout definition
import layout from './layout';

// add to HTMLInputElement
new TypeEthiopicWeb(document.querySelector('input'));
// add to HTMLTextAreaElement
new TypeEthiopicWeb(document.querySelector('textarea'));
```

## License

MIT © [Eyuel Berga](https://github.com/eyuelberga)
