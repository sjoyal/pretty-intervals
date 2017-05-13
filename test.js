import test from 'ava';
import calculateIntervals from './index';

test('Is a function', t => {
    t.true(typeof calculateIntervals === 'function');
});

test('Third argument is optional', t => {
    try {
        calculateIntervals(100, 0);
    } catch (e) {
        t.fail('Third argument is NOT optional');
    }

    t.pass();
});

test('Output is an array', t => {
    t.true(Array.isArray(calculateIntervals(100, 0)));
});

test('Appropriate intervals returned', t => {
    const testArr = [20, 40, 60, 80];
    const intervals = calculateIntervals(100, 0);

    intervals.forEach((interval, index) => {
        if (interval !== testArr[index]) {
            t.fail(`Expected ${testArr[index]} and got ${interval}`);
        }
    });

    t.pass();
});
