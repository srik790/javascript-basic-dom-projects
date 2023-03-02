// ****** select items **********
const btnRead = document.getElementById("btnRead");
const paragraph = document.getElementById("paragraph");
// ****** event listeners **********
// submit form
btnRead.addEventListener("click", show);

// ****** functions **********

function show(){
  paragraph.style.display = 'block';
  btnRead.style.display = 'none';
}
