// Advanced Arrays
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double); //--> [2, 4, 20, 32]

// Methods
// Map, Filter, Reduce
const mapArray = array.map(num => num * 2);

console.log(mapArray); //--> [2, 4, 20, 32]

const filterArray = array.filter(num => num > 5);

console.log(filterArray); //--> [20, 32]

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0); //--> 0 defines the accumulator value

console.log(reduceArray); //--> 29 (sum of array)

// Exercise 

// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const newArray = [];
  array.forEach(user => {
      let { username } = user;
      username += "!";
      newArray.push(username);
  });
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
  const usernames = array.map(user => {
      let { username } = user;  
      return username + "?";
  });
  
  //Filter the array to only include users who are on team: red
  const redTeam = array.filter(user => {
      return user.team === 'red';
  })
  
  //Find out the total score of all users using reduce
  const totalScore = array.reduce((acc, user) => {
    return acc + user.score;
  }, 0);

  
  // (1), what is the value of i? index
  // (2), Make this map function pure: 
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num) => num * 2)
  
  
