import test from 'ava';
import calculateIntervals from './index';

test('Is a function', t => {
    t.is(typeof calculateIntervals, 'function');
});

test('Third argument is optional', t => {
    try {
        calculateIntervals(0, 100);
    } catch (e) {
        t.fail('Third argument is NOT optional');
    }

    t.pass();
});

test('Output is an array', t => {
    t.true(Array.isArray(calculateIntervals(0, 100)));
});

test('Output is an empty array if min and max values are equal', t=> {
    const intervals = calculateIntervals(100, 100);
    t.true(Array.isArray(intervals) && intervals.length === 0, `Intervals returned: ${intervals}`);
});

test('Appropriate intervals returned', t => {
    const testArr = [20, 40, 60, 80, 100];
    const intervals = calculateIntervals(0, 100);

    intervals.forEach((interval, index) => {
        if (interval !== testArr[index]) {
            t.fail(`Expected ${testArr[index]} and got ${interval}`);
        }
    });

    t.pass();
});

test('Find range regardless of max, min argument order', t => {
    const testArr = [20, 40, 60, 80, 100];
    const intervals = calculateIntervals(0, 100);
    const isSame = testArr.length === intervals.length && intervals.every((interval, i) => interval === testArr[i]);

    t.true(isSame, `Intervals returned: ${intervals}`);
});

test('Find range regardless of max, min magnitude', t => {
    const intervals = calculateIntervals(.012, .021, { includeBounds: true });
    t.true(Array.isArray(intervals) && intervals.length > 0, `Intervals returned: ${intervals}`);
});

test('Find range regarless of max, min sign', t => {
    const intervals = calculateIntervals(-100, 100, { includeBounds: true });
    t.true(Array.isArray(intervals) && intervals.length > 0, `Intervals returned: ${intervals}`);
});

test('Include upper and lower bounds', t => {
    const testArr = [0, 20, 40, 60, 80, 100];
    const intervals = calculateIntervals(0, 100, { includeBounds: true });
    const isSame = testArr.length === intervals.length && intervals.every((interval, i) => interval === testArr[i]);

    t.true(isSame, `Intervals returned: ${intervals}`);
});
