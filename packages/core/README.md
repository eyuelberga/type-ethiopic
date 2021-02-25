## @type-ethiopic/core

This package contains the core module for Type Ethiopic. It doesn't do much by itself,
but can be extended to support diffrent use cases

## Installation

```sh
$ yarn add @type-ethiopic/core

# or

$ npm install @type-ethiopic/core
```

## Basic usage

By extending the exported class from `@type-ethiopic/core` you can add
app-specific logic. The most important method you would use would be the `write` method. This method
takes in a character and resolves it into a special symbol as per the layout
specification and returns the symbol and replacement state(if previous character needs to be replaced with the new symbol).

## License

MIT © [Eyuel Berga](https://github.com/eyuelberga)
