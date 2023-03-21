//Select the element with the ID 'inputNumber'
const inputNumber = document.getElementById("inputNumber");

//Select the element with the ID 'createListButton'
const createListButton = document.getElementById("createListButton");

//Select the element with the ID 'numberList'
const numberList = document.getElementById("numberList");

//Add a click event listener to the 'createListButton' element
createListButton.addEventListener("click", handleButtonClick);

//Function to write the numbers to the list
function handleButtonClick() {

  //Get the number entered in the input box
  const number = inputNumber.value;

  //Clear the existing content of the number list
  numberList.innerHTML = "";

  //Loop through numbers 1 to the entered number and create a list item for each
  for (let i = 1; i <= number; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
  }
}








