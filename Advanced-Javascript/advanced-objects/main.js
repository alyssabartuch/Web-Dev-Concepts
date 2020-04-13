// reference types
[] === [] //-> false

var obj1 = { value: 10 };
var obj2 = obj1; // referencing obj1 place in memory
var obj3 = { value: 10 };

obj1 === obj2 //-> true
obj1 === obj3 //-> false


// context vs scope
// scope is created when it sees {}
function b() {
  let a = 4;
}

//--> Cotnext - 'this' refers to what object its inside of
console.log(this);  

const obj4 = {
  a: function() {
    console.log(this); //--> this refers to obj4
  }
}


// instantiation
// making instances or multiple copies of an object 
class Player {
  constructor(name, type) {
    console.log('player', this); //--> 1st
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);    
  }
}

class Widard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log('wizard', this); //--> 2nd
  }
  play() {
    console.log(`Wee! I'm a ${this.type}`);
  }
}

const wizard1 = Wizard("Shelly", "Healer");
const wizard2 = Wizard("Sally", "Wood Elf");

// pass by reference vs pass by value
// primitive types are passed by value
var a = 5;
var b = a; // == b = (5) // value is copied from a
b++;
console.log(a); //--> 5
console.log(b); //-->> 6

// reference types are passed by reference

let object1 = {
  name: 'Yao',
  password: '123abc'
};
let object2 = object1; // references object1 in memory
object2.password = '$uper$ecret'; // changes password at the location in memory (object1 & object2) 
console.log(object1); //--> { name: 'Yao', password: '$uper$ecret' }
console.log(object2); //--> { name: 'Yao', password: '$uper$ecret' }

var c = [1, 2, 3, 4, 5];
var d = c; //--> to copy instead: var d = [].concat(c)
d.push(435);
console.log(d); //--> [1, 2, 3, 4, 5, 435]
console.log(c); //--> [1, 2, 3, 4, 5, 435]

let letters = { a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, letters);
let cloneSpread = {...letters}; // same as above

letters.c = 'C';
console.log(clone); //--> { a: 'a', b: 'b', c: 'c'}
console.log(cloneSpread); //--> { a: 'a', b: 'b', c: 'c'}
console.log(letters); //--> { a: 'a', b: 'b', c: 'C'}

// cloning objects - shallow vs deep cloning 
let something = {
  a: 'a',
  b: 'b',
  c: {
    deep: 'try to copy me'
  }
};
let somethingClone = Object.assign({}, something); // shallow cloning
let somethingClone2 = {...something}; // shallow cloning
let superClone = JSON.parse(JSON.stringify(something)); // deep cloneing
something.c = 5;
console.log(something); //--> { a: 'a', b: 'b', c: 5}
console.log(somethingClone); //--> { a: 'a', b: 'b', c: { deep: 'try to copy me' } }
console.log(somethingClone2); //--> { a: 'a', b: 'b', c: { deep: 'try to copy me' } }

something.c.deep = 'hahaha'; // deep is passed as a reference since it's a child of the initial object 
console.log(something); //--> { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(somethingClone); //--> { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(somethingClone2); //--> { a: 'a', b: 'b', c: { deep: 'hahaha' } }
console.log(superClone); //--> { a: 'a', b: 'b', c: { deep: 'try to copy me' } }

// type coersion
1 == '1' // true
1 === '1' // false

// Exercise

//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 5 -> 4
const object2 = object1; // 5 -> 4
const object3 = object2; // 5 -> 4
const object4 = { a: 5}; //5 -> 5
object1.a = 4; 


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
}

class Cow extends Mamal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  moo() {
    console.log(`Mooo I'm ${this.name} and I'm a ${this.color} ${this.type} Mooooooo`);
    
  }
}

var cow = new Cow('bessie', 'cow', 'brown');
cow.moo();