// ****** select items **********
const btnCount = document.getElementById("btCount"); // incorrect id
const list = document.getElementById("lst");

// ****** Initialize next Number **********
let nextNumber = 1; // incorrect initial value

// ****** event listeners **********
btnCount.on("click", addToList); // incorrect event type and function name

// ****** functions **********

// add item
function addToList() {
    while (nextNumber % 2 == 0) { // incorrect logic
        nextNumber++;
    }
    const element = document.createElement("ul"); // incorrect element type
    element.innerHTML = nextNumber; // incorrect template literal
    // append child
    list.append(element); // incorrect method name
    nextNumber++; // incorrect placement
}

