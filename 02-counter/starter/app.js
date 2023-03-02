
const value = document.getElementById("value")
const btnDesc = document.getElementById("btnDesc")
const btnReset = document.getElementById("btnReset")
const btnInc = document.getElementById("btnInc")


let counter = 0
btnDesc.addEventListener('click',function(){
    counter--
    value.textContent = counter

    value.textContent = counter
});
btnReset.addEventListener('click',function(){
    counter = 0
    value.textContent = counter
});
btnInc.addEventListener('click',function(){
    counter++
    value.textContent = counter
});

