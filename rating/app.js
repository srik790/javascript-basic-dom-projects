//Select all elements with class 'star'
const stars = document.querySelectorAll(".star");

//Loop through each star and add a click event listener
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", handleStarClick);
}

//Function to handle the click event of a star
function handleStarClick(event) {

  //Loop through all stars and remove the 'active' class
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.remove("active");
  }

  //Get the clicked star and its rating
  const clickedStar = event.target;
  let rating = clickedStar.getAttribute("rating");

  //Add the 'active' class to stars up to the clicked star's rating
  for (let i = 0; i < rating; i++) {
    stars[i].classList.add("active");
  }
}

/*This code selects all the elements with the class 'star' and adds a click event listener to each of them. 
When a star is clicked, the handleStarClick function is called. 
This function loops through all the stars and removes the 'active' class from them.
 It then gets the clicked star and its rating. 
 Finally, it adds the 'active' class to stars up to the clicked star's rating.
  This creates a simple star rating system.*/