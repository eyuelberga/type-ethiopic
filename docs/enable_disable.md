# Enabling/Disabling Type Ethiopic

By default Type Ethiopic is enabled when initialized. This can be overridden by
setting the `on` parameter during initialization.

```javascript
import { TypeEthiopicWeb } from '@type-ethiopic/web';

// add to HTMLInputElement without enabling it
new TypeEthiopicWeb(
    document.querySelector('input'),
    false
);
```

It is also possible to toggle between on and off states during run time by changing the
values of the `on` property on the `TypeEthiopicWeb` instance.

```javascript
import { TypeEthiopicWeb } from '@type-ethiopic/web';

// add to HTMLInputElement without enabling it
const myInstance = new TypeEthiopicWeb(
    document.querySelector('input'),
    false,
);

// change the on property to enable it

myInstance.on = true;
```
