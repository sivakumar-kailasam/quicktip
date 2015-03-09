# quicktip

A simple tooltip component written in react.js


## Demo & Examples

Live demo: [sivakumar-kailasam.github.io/quicktip](http://sivakumar-kailasam.github.io/quicktip/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use quicktip is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/quicktip.js` & `dist/Quicktip.css` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install quicktip --save
```


## Usage

```
var Quicktip = require('quicktip');

<Quicktip message="how cool is this" classesToAdd="success bold-content" direction="top" closeDelay=300>
     <MyComponent>
</Quicktip>
```

### Properties

* _**classesToAdd**_ - Any additional classes to add to the tooltip
* _**direction**_ - Direction of tooltip, possibly left|top|bottom|right (default: left)
* _**message**_ - Content to show inside the tooltip 
* _**closeDelay**_ - Delay before the tooltip disappears(default: 200)


### License

[MIT](LICENSE.md)

Copyright (c) 2015 Sivakumar Kailasam.

