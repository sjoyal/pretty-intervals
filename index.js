function findIntervalSize(max, min, breaks, numIntervals) {
    const explicitTick = (max - min) / numIntervals;
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

function findUpperBound(max, interval) {
    return interval * Math.ceil(max / interval);
}

function findLowerBound(min, interval) {
    return interval * Math.floor(min / interval);
}

module.exports = calculateIntervals = (max, min, opts = {}) => {
    const { breaks = [1, 1.5, 2, 3, 5, 7.5, 10], includeBounds = false, numIntervals = 5 } = opts;
    const interval = findIntervalSize(max, min, breaks, numIntervals);
    const start = findLowerBound(min, interval);
    const end = findUpperBound(max, interval);
    let ticks = [];

    for (let i = 1; i <= numIntervals; i++) {
        const tick = start + interval * i;

        if (tick < end) {
            ticks.push(tick);
        }
    }

    // add bounds if necessary, but conduct check to see if upper bound is already including in ticks array
    if (includeBounds && !ticks.find(t => t === end)) {
        ticks = [start].concat(ticks.slice(0)).concat(end);
    } else if (includeBounds) {
        ticks.unshift(start);
    }

    return ticks;
};
