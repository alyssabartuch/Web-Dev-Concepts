var todos = [
    "clean room",
    "do laundry",
    "exercise",
    "study javascript",
    "pickup groceries"
];

for (var i=0; i < todos.length; i++) {
    console.log(todos[i], i);
}

todos.forEach(function(todo, i) {
    console.log(todo, i)
});