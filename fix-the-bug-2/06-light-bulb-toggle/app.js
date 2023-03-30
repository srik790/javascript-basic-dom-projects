//****** Initial state**********/
var isOn = false;

// ****** select items **********
const btnToggle = document.getElementById("btnToggle");
const bulbImg = document.getElementById("bulbImg");
// ****** event listeners **********
// submit form
btnToggle.addEventListener("click", toggleBulb);

// ****** functions **********

function toggleBulb(){
  debugger;
  if(isOn){
    bulbImg.src='pic_bulboff.gif';
    btnToggle.innerHTML = 'Turn on the light';
    isOn = false;

  }
  else{
    bulbImg.src='pic_bulbon.gif';
    btnToggle.innerHTML = 'Turn off the light'
    isOn = true;

  }

}
