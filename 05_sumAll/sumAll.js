// const sumAll = function (min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";

//     if (min > max) [min, max] = [max, min];
    
//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//       sum += i;
//     }
//     return sum;
//   };

// MY SOLUTION //
const sumAll = function(a, b) {
    let sum = 0;
    let min = 0;
    let max = 0;

    console.log(a);
    console.log(b);

    if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
        if (a < b) {
            min = a;
            max = b;
        }
        else if (a > b) {
            max = a;
            min = b;
        }

        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
