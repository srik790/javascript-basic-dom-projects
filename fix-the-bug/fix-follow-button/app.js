// ****** select items **********
const btnRead = document(btnFollow);
// ****** event listeners **********
btnFollow.addeventlistener(click);

// ****** functions **********

function handleClick(){
  btnRead.textContent="Followed"
  btnFollow.backgroundColor = "blue"
}
