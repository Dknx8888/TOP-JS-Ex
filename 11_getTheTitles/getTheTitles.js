const getTheTitles = function(dict) {
    res = []
    for (let i = 0; i < dict.length; i++) {
        res.push((dict[i]).title);
    }
    return res;
};

// Do not edit below this line
module.exports = getTheTitles;
