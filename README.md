# pretty-intervals
Generate an array of round number intervals for a range
Inspired by the various solutions provided in response to [this stack overflow question](http://stackoverflow.com/questions/361681/algorithm-for-nice-grid-line-intervals-on-a-graph)

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
// ES2015
// import prettyIntervals from 'pretty-intervals';

const intervals = prettyIntervals(100, 0);
console.log(intervals);
// [20, 40, 60, 60]
```
