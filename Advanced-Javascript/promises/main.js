const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('stuff worked');
    } else {
        reject('error, it broke');
    }
});
promise.then(results => console.log(results))

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    return results
}).catch(() => console.log('error'))

// exercise
// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const fourSecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    },4000);  
})

// #2) Run the above promise and make it console.log "success"
fourSecondPromise.then(result => console.log(result))

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
    setTimeout(() => {
      console.log("success");
    }, 4000)
  );

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log("oops something went wrong")

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => 
    fetch(url).then(response => response.json())
)).then(resultsArr => {
    console.log(resultsArr[0]);
    console.log(resultsArr[1]);
    console.log(resultsArr[2]);
    console.log(resultsArr[3]);
}).catch((err) => console.log('fix it!', err))

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
//--> YES!

// async / await
movePlayer(100, 'left')
    .then(() => movePlayer(400, 'left'))
    .then(() => movePlayer(40, 'right'))
    .then(() => movePlayer(330, 'left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'left'); //pause
    await movePlayer(400, 'left'); //pause
    await movePlayer(10, 'right'); //pause
    await movePlayer(330, 'left'); //pause
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(console.log)

async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);   
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    return results});

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(response => response.json())
        }))
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch(err) {
        console.log('oops', err);   
    }  
}

// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function getStartship() {
    let response = await fetch('https://swapi.co/api/starships/9/');
    let data = response.json();
    console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            async function getResponses() {
                let resp = await fetch(url);
                return await resp.json();
            }
            return getResponses();
          }));
          console.log('users', users);
          console.log('posta', posts);
          console.log('albums', albums);
    } catch(err) {
        console.log('oops', err);
    } 
}

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
    return a + b + c + d + e
}

sum(...array);

const animals = {
    lion: 10, 
    monkey: 20,
    bear: 12
}

const { lion, ...rest } = animals
//lion --> 10 
//rest --> [ monkey: 20, bear: 12 ]


const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
Promise.all(urls.map(url => {
    return fetch(url).then(response => response.json())
}))
    .then(resultsArr => {
      console.log(resultsArr[0]);
      console.log(resultsArr[1]);
      console.log(resultsArr[2]);
      console.log(resultsArr[3]);
    })
    .catch((err) => console.log('fix it!', err))


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholdeTYPO.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
    ]

async function getData() {
    const promisesArray = urls.map(url => fetch(url));

    for await (let request of promisesArray) {
        const data = await request.json();
        console.log(data);
    }
}    

