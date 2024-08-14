function greetingPromise(name) {
    return new Promise((resolve) => {
        resolve(`Hello, ${name}!`);
    });
}

greetingPromise("Mithun").then(message => {
    console.log(message);
});
