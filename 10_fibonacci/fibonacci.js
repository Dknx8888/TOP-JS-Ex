const fibonacci = function(a) {
    if (a < 0) return "OOPS";
    
    fib = [0, 1];
    for (i = 2; i <= a; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[a]
};

// Do not edit below this line
module.exports = fibonacci;
