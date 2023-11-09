const sumAll = function(a, b) {
    if (!Number.isInteger(a) || a < 0) return 'ERROR';
    if (!Number.isInteger(b) || b < 0) return 'ERROR';

    if (a > b) {
        [a, b] = [b, a];
    }

    let sum = 0;
    for (let i = a; i <= b; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
