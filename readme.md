## Proxy Hide Properties

This super simple library makes it super simple to hide properties in an Object, using ES6 proxies.

If you want to read more about Proxies, you can read the accompanying blog post; [Metaprogramming in ES6: Part 3 - Proxies](https://www.keithcirkel.co.uk/metaprogramming-in-es6-part-3-proxies/).

## Install:

```bash
npm i proxy-hide-properties
```

## Usage:

Simply call the exported function with an object and a list of property names, and it'll return a wrapped object back. The given property names will be hidden from view - all the ways you could determine if they're present will not work. All other properties will work as normal. A simple illustration:

```js
const hideProperty = require('proxy-hide-properties');
const example = hideProperty({ foo: 1, bar: 2 }, 'foo');
'foo' in example; // false
'bar' in example; // true
Object.keys(example); // ['bar']
```

See the tests for a more in depth examples

## Contributing:

Feel free to contribute in any way you see fit. Keep in mind this repo follows the [Contributor Covenant](http://contributor-covenant.org/).

## License

```
Copyright © 2016 Keith Cirkel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
