function stripPunctuationAndSpaces(str) {
    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
}

const reverseString = function(text) {
    text = text.toLowerCase();
    text = stripPunctuationAndSpaces(text);
    let res = "";
    for (let i = text.length - 1; i >= 0; i--) { 
        res += text[i];
    }
    return res
};

const palindromes = function (a) {
    a = stripPunctuationAndSpaces(a);
    a = a.toLowerCase();
    if (a === reverseString(a)) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
