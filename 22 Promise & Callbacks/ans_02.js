function manipulateString(str, callback) {
    let manipulatedString = str.toUpperCase();
    callback(manipulatedString);
}

function logString(manipulatedStr) {
    console.log(`The manipulated string is: ${manipulatedStr}`);
}

manipulateString("hello, world!", logString);