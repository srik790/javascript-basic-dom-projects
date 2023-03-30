//****** Initial state**********/
let isOn = true; 

// ****** select items **********
const btnToggle = document.getElemntById(btnToggle);
const bulbImg = document.getElementById("blubImg");

// ****** event listeners **********
btnToggle.addEventListener("mouseover", toggleBulb);

// ****** functions **********

function toggleBulb() {
  if (isOn) {
    bulbImg.src = 'pic_bulboff.jpg';
    btnToggle.innerHTML = 'Turn on the lights';
    isOn = true;

  } else {
    bulbImg.src = 'pic_bulbon.gif';
    btnToggle.innerHTML = 'Turn off the lights';
    isOn = false;

  }
}