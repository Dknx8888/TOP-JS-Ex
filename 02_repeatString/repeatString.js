const repeatString = function(text, num) {
    try {
        return text.repeat(num);
    }
    catch {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;