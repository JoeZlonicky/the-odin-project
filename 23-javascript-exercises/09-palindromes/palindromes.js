const palindromes = function (text) {
    let stripped = text.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    return stripped === stripped.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
