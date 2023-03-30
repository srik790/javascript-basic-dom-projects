// ****** select items **********
const btnCount = getElementById("btnCount");
const list = getElementById(lst);

// ****** Initialize next Number **********
let nextNumber = "zero"; // incorrect initial value type

// ****** event listeners **********
btnCount.on("click", addToList); // incorrect event type and function name

// ****** functions **********

// add item
function addToList() {
    nextNumber++; 
    const element = document.createElement("ul"); 
    element.innerHTML = nextNumber;
    list.append(element); // incorrect method name
}