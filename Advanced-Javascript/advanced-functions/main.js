// closures ------------------------------------------
// a function is ran. its never going to run again. 
// BUT its going to remember that there is reference to those variables
// SO the child scope always has access to the parent scope.

const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first(); // newFunc holds the second function as its value
// second function is enclosed within newFunc
newFunc(); // executing newFunc executes second function


// Currying ------------------------------------------
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b; // think of each => as a function 

curriedMultiply(3) // returns --> (b) => 3 * b
curriedMultiply(3)(4) // returns --> 12

//use case 
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(5); //--> 25
multiplyBy5(10); //--> 50
multiplyBy5(11); //--> 55

// Compose ------------------------------------------
const compose = (f, g) => (a) => f(g(a)); 
const sum = (num) => num + 1;
compose(sum, sum)(5); //--> 7
//  (sum, sum) => (5) => sum(sum(5))
//sum(5) //--> 6
// sum(6) //--> 7

// avoiding conflicts --> functional purity
// side effects are anything that happens within the functions scope that cant be accessed outside
var a = 0;
function b() {
    a = 5; // Side effect - effects the outside world
}  

// avoid side effects and always return --> determianistic 
// determinism
// no matter where the function is placed it should run the same
// same input ==> same output - anywhere


// Exercise

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) //--> addToTen(addToTen(3))  //--> 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) //--> (30) => (1) => 30 + 1  //--> 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5) //--> (b) => 5 + b
add5(12) //--> (12) => 5 + 12  //--> 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) //--> add1(add5(10)) //--> 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.

