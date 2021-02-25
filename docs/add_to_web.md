# Adding Type Ethiopic to web

> Type Ethiopic supports web integration through the `@type-ethiopic/web` package.
> You can use it on a simple site or along with a web framework like React or Vue.

```javascript
import { TypeEthiopicWeb } from '@type-ethiopic/web';

// add to HTMLInputElement
new TypeEthiopicWeb(document.querySelector('input'));
// add to HTMLTextAreaElement
new TypeEthiopicWeb(document.querySelector('textarea'));
```
