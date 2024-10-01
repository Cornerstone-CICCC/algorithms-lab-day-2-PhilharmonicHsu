// Exercise 8: Write a function `groupByAge` that takes an array of people objects (each with a `name` and `age`),
// and groups them by age into an object where the keys are ages and the values are arrays of people of that age.
// Example: groupByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }])
// should return { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }.

function groupByAge(people) {
    let output = {};

    for (let person of people) {
        if (output.hasOwnProperty(person.age)) {
            output[person.age].push(person);
        } else {
            output[person.age] = [person];
        }
    }

    return output;
}

console.log(groupByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }])); // Expected output: { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }