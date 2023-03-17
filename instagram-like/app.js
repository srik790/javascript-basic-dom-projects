const likeHeart = document.getElementById('imgEl');
const heartIcon = likeHeart.querySelector('.heart');
let isLiked = false;

likeHeart.addEventListener('dblclick', () => {
  if (isLiked) {
    heartIcon.classList.remove('active');
    isLiked = false;
  } else {
    heartIcon.classList.add('active');
    isLiked = true;
  }
});
