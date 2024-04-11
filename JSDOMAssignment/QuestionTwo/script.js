let btn = document.getElementById("btn");

btn.addEventListener("click",textChange);

function textChange(){
    btn.innerText = "LogOut"
}

btn.addEventListener("dblclick",textReChange);

function textReChange(){
    btn.innerText = "LogIn"
}

btn.addEventListener("mouseover",bgRed);

function bgRed(){
    document.body.style.backgroundColor = "red"
}

btn.addEventListener("mouseout",bgGreen);

function bgGreen(){
    document.body.style.backgroundColor = "green"
}

let names = document.getElementById("name");

//names.addEventListener("onkeypress",onKeyPress)

function onKeyPress(){
    names.style.backgroundColor = "aqua";
}

function onKeyUp(){
    names.value = names.value.toUpperCase();
}

function onKeyDown(){
    document.getElementById("demo").innerHTML = "You Are Start Your Form Fill Up"
}
