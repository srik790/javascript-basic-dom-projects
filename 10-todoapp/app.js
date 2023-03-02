// ****** select items **********

const form = document.getElementById("form");
const grocery = document.getElementById("grocery");
const list = document.getElementById("list");

// ****** event listeners **********
// submit form
form.addEventListener("submit", addItem);

// ****** functions **********

// add item
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;

    const element = document.createElement("li");
    element.innerHTML = `${value}`;
    // append child
    list.appendChild(element);
    grocery.value = '';
    grocery.focus();
}