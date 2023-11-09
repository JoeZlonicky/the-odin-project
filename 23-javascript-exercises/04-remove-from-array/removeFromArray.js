const removeFromArray = function(array, ...toRemove) {
    return array.filter((e) => !toRemove.includes(e));
};

// Do not edit below this line
module.exports = removeFromArray;
