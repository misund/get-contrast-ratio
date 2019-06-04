# Get contrast ratio

[![Greenkeeper badge](https://badges.greenkeeper.io/misund/get-contrast-ratio.svg)](https://greenkeeper.io/)

`get-contrast-ratio` calculates the contrast ratio between two CSS color's
relative luminances based on
[this definition from W3C](https://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef).

It doesn't handle transparency as of yet.

This is the contrast ratio you'll need to care about to pass WCAG requirements.

## Installation
```
$ npm install get-contrast-ratio
```

## Usage
```js
import getContrastRatio from 'get-contrast-ratio';

getContrastRatio('black', 'white'); // 21
getContrastRatio('rgb(0,0,0)', 'rgb(255,255,255)'); // 21
getContrastRatio('black', '#000'); // 1
getContrastRatio('white', '#fff'); // 1
getContrastRatio('hsl(50, 30%, 40%)', 'hsl(50, 30%, 40%)'): // 1

```

## Signature
`(color1: string, color2: string } = {}) => number`

The string parameters are more specifically strings that can be parsed as colors in CSS.

The return value is a number with two decimals in the range `1 <= number <= 21`.

## Contributing
I appreciate your issues and PRs [on Github](https://github.com/misund/get-contrast-ratio)!

### Testing
```
yarn build && yarn test
```

### Releasing
This project uses [np](https://github.com/sindresorhus/np).
1. Make sure your changes are in master
2. Run `yarn release`
3. Follow the interactive release guide
