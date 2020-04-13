'turtle'.padStart(10); // '         turtle' (10 INCLUDING original string)
'turtle'.padStart(10); // 'turtle         ' (10 INCLUDING original string)

// trailing commas 
const fun = (a, b, c, d,) => {
    console.log();
}
fun(1, 2, 3, 4,);

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key, i) => {
    console.log(key, obj[key]);
});
// username0 Santa
// username1 Rudolf
// username2 Mr. Grinch

Object.values(obj).forEach(value => {
    console.log(value);
});
// Santa
// Rudolf
// Mr. Grinch

Object.entries(obj).forEach(value => {
    console.log(value);
})
// ["username0", "Santa"]
// ["username1", "Rudolf"]
// ["username2", "Mr. Grinch"]

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
// ["Santa0, Rudolf1, Mr. Grinch2"]

// exercise 

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle.padStart(8);
rabbit.padStart(8);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// '🐢======='

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
Object.entries(obj).map(value => value.join(" ")).join(' ')