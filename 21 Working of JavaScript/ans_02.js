try {
    console.log(multiplyNumbers(5, 3));
} catch (e) {
    console.log(e.message);
}


const multiplyNumbers = function (a, b) {
    return a * b;
};


console.log(multiplyNumbers(5, 3));