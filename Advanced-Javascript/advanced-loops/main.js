const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges:10,
    grapes: 1000
};

// for-of loop (iterating - arrays & strings)
for (item of basket) {
    console.log(item);
}

// for-in loop - (enumerating - objects) 
for (item in detailedBasket) {
    console.log(item);
}

// exercise 

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
    var largestNum = 0;
    for (num of arr) {
        if (num > largestNum) {
            largestNum = num; 
        }
    }
    return largestNum;
}

function biggestNumberInArray2(arr) {
    var largestNum = 0;
    arr.forEach(num => {
        if (num > largestNum) {
            largestNum = num;
        }
    })
    return largestNum;
}

function biggestNumberInArray3(arr) {
    var largestNum = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

}