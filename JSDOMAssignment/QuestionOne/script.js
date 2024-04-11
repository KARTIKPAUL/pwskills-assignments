let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let value = document.getElementById("val");
let val = Number(value.innerText);

btn1.addEventListener("click",decrementOne);

function decrementOne(){
     if(val > 0) val--;
     value.innerText = val;
}

btn2.addEventListener("click",incrementOne);

function incrementOne(){
    if(val < 100) val++;
    value.innerText = val;
}


btn3.addEventListener("click",setToZero);
function setToZero(){
    val = 0;
    value.innerText = 0;
}

