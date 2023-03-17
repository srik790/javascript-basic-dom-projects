const likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const likeCount = button.parentElement.querySelector(".like-count");
    let currentCount = Number(likeCount.textContent);
    currentCount++;
    likeCount.textContent = currentCount;
  });
});
