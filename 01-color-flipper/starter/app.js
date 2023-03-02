const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const color = document.getElementById("color")
const btn = document.getElementById("btn")

btn.addEventListener('click',function(){
    var random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
});
