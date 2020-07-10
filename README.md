# onAnyKey

Easily `await` any keypress - _without_ keeping the process from otherwise terminating!

## Usage:
```js
  const { onAnyKey } = require("onAnyKey");

  // in an async method...
  await onAnyKey();
```