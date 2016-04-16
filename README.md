# num-pad #

Num Pad is a simple number pad function. It adds a 0 infront of numbers less then 10.

## Installing ##

```shell
npm install --save num-pad
```

## Using: ##

```javascript
const numPad = require("num-pad");

const april = numPad(4);
april === "04";

const december = numPad(12);
december === "12";
```