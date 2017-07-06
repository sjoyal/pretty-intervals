function findIntervalSize(min, max, numIntervals) {
    const explicitTick = Math.abs(max - min) / numIntervals;
    const magnitude = Math.pow(10, Math.floor(Math.log(explicitTick) / Math.log(10)));
    const factor = explicitTick / magnitude;
    const flooredFactor = Math.floor(explicitTick / magnitude);
    let breaks = [];
    let bisector;

    for (let i = 0; i <= 2; i++) {
        breaks.push(flooredFactor + (i * .5));
    }

    bisector = breaks.reduce((p, c) => {
        if (c <= factor) {
            return c;
        }
        return p;
    }, flooredFactor);

    return bisector * magnitude;
}

function findUpperBound(min, max, interval) {
    const upper = max >= min ? max : min;
    return interval * Math.ceil(upper / interval);
}

function findLowerBound(min, max, interval) {
    const lower = max >= min ? min : max;
    return interval * Math.floor(lower / interval);
}

const calculateIntervals = (min, max, opts = {}) => {
    const { includeBounds = false, numIntervals = 5 } = opts;
    const interval = findIntervalSize(min, max, numIntervals);
    const start = findLowerBound(min, max, interval);
    const end = findUpperBound(min, max, interval);
    let ticks = [];

    if (numIntervals < 1) {
        throw new TypeError(`Expected ${numIntervals} to be a number greater than or equal to 1`);
    }

    // there's no intervals between 2 equal values, return an empty array
    if (min === max) {
        return ticks;
    }

    for (let i = 1; i <= numIntervals; i++) {
        const tick = start + interval * i;

        if (tick <= end) {
            ticks.push(tick);
        }
    }

    // add bounds if necessary, but conduct check to see if upper bound is already including in ticks array
    if (includeBounds === true && !ticks.find(t => t === end)) {
        ticks = [start].concat(ticks.slice(0)).concat(end);
    } else if (includeBounds === true) {
        ticks.unshift(start);
    }

    return ticks;
};

module.exports = calculateIntervals;
