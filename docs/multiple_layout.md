# Using Type Ethiopic with multiple keyboard layouts

It is possible to add more than one keyboard layout to one instance. This could
be beneficial in cases when you want users to pick from a selection of
input methods.

multiple layout definitions can be added during initialization.

```javascript
import { TypeEthiopicWeb } from '@type-ethiopic/web';

// keyboard layout definitions
import layout1 from './layout1';
import layout2 from './layout2';
import layout3 from './layout3';

// add to HTMLInputElement with multiple layout definitions
// the parameter accepts a map of layout name and its definition
new TypeEthiopicWeb(document.querySelector('input'), {
    default: layout1,
    typewriter: layout2,
    mnemonic: layout3,
});
```
