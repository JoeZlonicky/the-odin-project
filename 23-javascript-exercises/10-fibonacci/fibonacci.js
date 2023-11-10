const fibonacci = function(n) {
    if (typeof(n) === 'string') {
        n = parseInt(n);
    }
    if (isNaN(n) || n < 0) return 'OOPS';

    let a = 1;
    let b = 1;
    for (let i = 2; i < n; ++i) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
