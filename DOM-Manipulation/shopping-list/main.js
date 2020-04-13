var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButtons = document.querySelectorAll(".delete-item");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("x"));
    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton);
    ul.appendChild(li);

    input.value = "";
    deleteButton.addEventListener("click", removeListItem);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode == 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(listItem) {

    listItem.addEventListener("click", function() {
        listItem.classList.toggle("done");
    });
})

function removeListItem(event) {
    button.removeEventListener("click", removeListItem)
    event.target.parentNode.remove()
}

deleteButtons.forEach(function(button) {
    button.addEventListener("click", removeListItem)
}) 

