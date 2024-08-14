function ageInDays(person, callback) {
    let fullName = `${person.firstName} ${person.lastName}`;
    let ageInDays = person.age * 365;
    callback(fullName, ageInDays);
}

function logResult(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
}

let person = { firstName: "Mithun", lastName: "S", age: 20 };
ageInDays(person, logResult);
