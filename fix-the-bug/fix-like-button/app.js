// ****** select items **********
const btnRead = getElementById("btnLike");
// ****** event listeners **********
btnLike.addEventListener("click", handleclick);

// ****** functions **********

function handleClick(){
  btnRead.textContent="Liked"
  btnRead.backgroundColor = "blue"
}
