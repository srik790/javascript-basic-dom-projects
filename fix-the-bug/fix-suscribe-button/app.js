// ****** select items **********
const btnRead = getElementById(btnSubscribe);
// ****** event listeners **********
btnSubscribe.addeventlistener(click, handleclick);

// ****** functions **********

function handleClick(){
  btnRead.textContent="Subscribed"
  btnSubscribe.backgroundColor = "red"
}
