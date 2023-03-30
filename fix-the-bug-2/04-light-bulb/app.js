// ****** select items **********
const btnOn = document.getElemntById("btnOn"); 
const btnOff = document.getElementById("btnOff");
const bulbImg = document.getElementById("blubImg");

// ****** event listeners **********
btnOn.addEventListener("hover", turnBulbOn); // 
btnOff.addEventListener("click", "turnBulbOn");

// ****** functions **********

function turnBulbOn() {
bulbImg.src = 'pic_bulboff.jpg'; 
}

function turnBulbOff() {
bulbImg.src = 'pic_bulboff.gif';
alert("Bulb is turned off");
}