const reverseString = function(text) {
    let res = "";
    for (let i = text.length - 1; i >= 0; i--) { 
        res += text[i];
    }
    return res
};

// Do not edit below this line
module.exports = reverseString;
