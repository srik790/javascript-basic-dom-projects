// ****** select items **********

const btnCount = document.getElementById("btnCount");
const list = document.getElementById("list");

// ****** Initialize next Number **********
var nextNumber = 0;

// ****** event listeners **********
btnCount.addEventListener('click', count);


// ****** functions **********

// add item
function count() {
    nextNumber++;
    while (nextNumber % 2 != 0) {
        nextNumber++;
    }
    const element = document.createElement("li");
    element.innerHTML = `${nextNumber}`;
    // append child
    list.appendChild(element);
}