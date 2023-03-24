//Select the element with the ID 'inputNumber'
const inputNumber = document.getElementById("inputNumber");

//Select the element with the ID 'createListButton'
const createListButton = document.getElementById("createListButton");

//Select the element with the ID 'numberList'
const numberList = document.getElementById("numberList");

//Add a click event listener to the 'createListButton' element
createListButton.addEventListener("click", handleButtonClick);



let nextNumber = 2;

//Function to write the numbers to the list
function handleButtonClick() {

  //Get the number entered in the input box
  const userInput = inputNumber.value;

  //Clear the existing content of the number list
  numberList.innerHTML = "";

  //Loop through numbers 1 to the entered number and create a list item for each
  for (let currentNumber = 2; currentNumber <= userInput; currentNumber++) {
    debugger;
    let isPrime = checkIfPrime(currentNumber);

    if(isPrime == true){
      const listItem = document.createElement("li");
      listItem.textContent = currentNumber;
      numberList.appendChild(listItem);
    }

  }
}



function checkIfPrime(numberToCheck){

  let isPrime = true;
  for (let i = 2; i < numberToCheck; i++) {

    if(numberToCheck % i == 0){
      isPrime = false;
    }
  }

  return isPrime;
}










