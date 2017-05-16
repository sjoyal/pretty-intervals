function findIntervalSize(max, min, breaks, numIntervals) {
    const explicitTick = Math.abs(max - min) / numIntervals;
    const magnitude = Math.pow(10, Math.floor(Math.log(explicitTick) / Math.log(10)));
    const factor = explicitTick / magnitude;
    const bisector = breaks.reduce((p, c) => {
        if (factor <= c && !p) {
            return c;
        }
        return p;
    }, 0);

    return bisector * magnitude;
}

function findUpperBound(max, min, interval) {
    const upper = max >= min ? max : min;
    return interval * Math.ceil(upper / interval);
}

function findLowerBound(max, min, interval) {
    const lower = max >= min ? min : max;
    return interval * Math.floor(lower / interval);
}

const calculateIntervals = (max, min, opts = {}) => {
    const { breaks = [1, 1.5, 2, 3, 5, 7.5, 10], includeBounds = false, numIntervals = 5 } = opts;
    const interval = findIntervalSize(max, min, breaks, numIntervals);
    const start = findLowerBound(max, min, interval);
    const end = findUpperBound(max, min, interval);
    let ticks = [];

    if (numIntervals < 1) {
        throw new TypeError(`Expected ${numIntervals} to be a number greater than or equal to 1`);
    } else if (!Array.isArray(breaks) || !breaks.length) {
        throw new TypeError(`Expected ${breaks} to be an array with a length greater than or equal to 1`);
    }

    for (let i = 1; i <= numIntervals; i++) {
        const tick = start + interval * i;

        if (tick < end) {
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
