const repeatString = function(string, n) {
    if (n < 0) {
        return 'ERROR';
    }
    
    let value = '';
    for (let i = 0; i < n; ++i) {
        value += string;
    }
    return value;
};

// Do not edit below this line
module.exports = repeatString;
