`use strict`;

function btnClick() {
    let worldValue = document.getElementById("worldInput").value;
    let result = document.getElementById("result");
    result.textContent = worldValue;
}

let changeText = document.getElementById("result");

function btnClick1(){
    changeText.classList.remove("change");
    changeText.classList.remove("change1");
    changeText.classList.remove("change2");
    changeText.classList.remove("change3");
}
function btnClick2(){
    changeText.classList.add("change");
}
function btnClick3(){
    changeText.classList.add("change1");
}
function btnClick4(){
    changeText.classList.add("change2");
}
function btnClick5(){
    changeText.classList.add("change3");
}