// ****** select items **********
const btnSuprise = document.getElementById("btnSuprise");
const divSup = document.getElementById("divSup");
// ****** event listeners **********
// submit form
btnSuprise.addEventListener("click", show);

// ****** functions **********

function show(){
  divSup.style.display = 'block';
  btnSuprise.style.display = 'none';
}
