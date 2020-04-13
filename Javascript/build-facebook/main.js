var database = [
    {
        username: "andyp",
        password: "p@s$w0rd"
    },
    {
        username: "sandyb",
        password: "123abc"
    },
    {
        username: "johnd",
        password: "$uper$ecret"
    }
];

var newsfeed = [
    { 
        username: "andyp",
        timeline: "javascript is so cool!" 
    },
    {
        username: "sandyb",
        password: "anyone miss leaving the house?"
    },
    {
        username: "johnt",
        password: "at least it's starting to warm up outside"
    }
];

var username = prompt("what's you username?");
var password = prompt("what's your password?");

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === user && 
            database[i].password === pass) {
            return true
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsfeed);
    }
    else {
        alert("sorry wrong username and password!");   
    }
}

signIn(username, password);