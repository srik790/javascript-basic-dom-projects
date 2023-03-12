// ****** select items **********

const likeBtn = document.getElementById("like");

// ****** event listeners **********
// click form
likeBtn.addEventListener("click", toggle);

// ****** functions **********

// add item
function toggle(e) {
  debugger;
  likeBtn.classList.toggle('fa-thumbs-up');
  likeBtn.classList.add('fa-solid');
}