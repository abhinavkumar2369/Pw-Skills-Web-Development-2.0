function doubleArray(arr, callback) {
    let doubledArray = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArray.push(callback(arr[i]));
    }
    return doubledArray;
}

function doubleValue(num) {
    return num * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = doubleArray(numbers, doubleValue);
console.log(doubledNumbers);
