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

const intervals = prettyIntervals(0, 100);

console.log(intervals);
// [20, 40, 60, 60]
```

## API

### prettyInterval(min, max, [options])

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

* **includeBounds**<br>
Type: `boolean`<br>
Default: 'false'<br>
By default, a call to **prettyIntervals(min, max)** will return intervals greater than min and less than max. If this optional parameter is set to `true`, a lower bound interval less than min and upper bound interval greater than max will be returned in the intervals array.

## License

MIT
