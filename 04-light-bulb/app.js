// ****** select items **********
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const bulbImg = document.getElementById("bulbImg");
// ****** event listeners **********
// submit form
btnOn.addEventListener("click", turnBulbOn);
btnOff.addEventListener("click", turnBulbOff);

// ****** functions **********

function turnBulbOn(){
  bulbImg.src='pic_bulbon.gif'
}
function turnBulbOff(){
  bulbImg.src='pic_bulboff.gif'
}
