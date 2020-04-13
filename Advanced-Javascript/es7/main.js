// includes method - strings and arrays
'Helloooo'.includes('o'); // true

const pets = ['cat', 'dog', 'bat'];
pets.includes('dog'); // true
pets.includes('bird'); // false


// exponential operator 
const square = (x) => x**2; // x to the power of 2
const cube = (y) => y**3; // x to the power of 3

// exercise

// Solve the below problems:
// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John'); // false


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const JohnDragons = dragons.filter(name => name.includes('John')); // ['johnathan']

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const toTheHundrethPower = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

console.log(toTheHundrethPower(10000));