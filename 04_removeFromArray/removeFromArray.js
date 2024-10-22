const removeFromArray = function(arr, ...r) {
    for (i of r){
        idx = arr.indexOf(i);
        while (idx != -1) {
            rm = arr.splice(idx, 1);
            idx = arr.indexOf(i);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
