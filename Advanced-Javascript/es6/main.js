// let + const
const player = "bobby";
let experinece = 100;
let isWizard = false;

if (experinece > 90) {
    let isWizard = true;
    console.log(isWizard); // true
}

console.log(isWizard); // false

const user = { // const can't be reassigned but properties can be updated
    player: "bobby",
    experinece: 90, 
    isWizard: false
};

console.log(userExperience); // 90
user.experinece = 50;
console.log(userExperience); // 50

// destructuring
const { player, isWizard } = user;
let { experinece } = user;

// object properties 
// - dynamic property values
const name = "greeting";
const obj = {
    [name]: 'hello',  // greeting: 'hello'
    ["greeting" + (1 + 1)]: "hihi" // greeting2: 'hihi
}
// - if property and value are same names only one reference is required
const a = "simon";
const b = true;
const c = {};

const obj = {
    a,
    b,
    c
}

// default arguments 
const age = 24
function greet(name='john doe', age=30, pet='cat') {
    return `hello ${name}, you are ${age} and you have a ${pet}`;
}
console.log(greet()); // hello john doe, you are 24 and you have a cat

// arrow functions 
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b; // equivalent arrow function 

// ---------------------------------------------------------------
// ES6 Exercise

// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

let { firstName, lastName, age, eyeColor } = person


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = { a, b, c }; 


// Template strings
var message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
const isValidAge = (age=10) => age

// Symbol
// Create a symbol: "This is my first Symbol"
let symbol = Symbol("This is my first symbol");

// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const whereAmI = (username, location) => (username && location) ? "I am not lost" : "I am totally lost!";
