# pretty-intervals
Generate an array of round number intervals for a range<br>
Inspired by the various solutions provided in response to [this stack overflow question](http://stackoverflow.com/questions/361681/algorithm-for-nice-grid-line-intervals-on-a-graph).

## Install
```
$ yarn add pretty-intervals
```
or
```
$ npm install pretty-intervals --save
```

## Usage
```js
const prettyIntervals = require('pretty-intervals');
// ES2015... import prettyIntervals from 'pretty-intervals';

const intervals = prettyIntervals(100, 0);

console.log(intervals);
// [20, 40, 60, 60]
```

## API

### prettyInterval(max, min, [options])

Returns an array of rounded numbers that represent *pretty* intervals between the min and max provided.

#### max

Type: `Number`

Number representing the top of the range.

#### min

Type: `Number`

Number representing the bottom of the range.

#### options

Type: `Object`

* **numIntervals**<br>
Type: `number`<br>
Default: `5`<br>
Minimum: `1`<br>
A hint indicating the number of round intervals preferred. The presence of this optional parameter does **NOT** guarantee an explicit number of intervals returned.
