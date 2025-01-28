let btn = document.querySelector(".btn");
let colorDisplay = document.querySelector("#color-shown");
let background = document.querySelector(".container");

let colors = ["Red","Blue","Green","Yellow","Pink","Orange"];
const generateColor = ()=>{
    let ind = Math.floor(Math.random()*colors.length);
    return colors[ind];
}
// loading the initial bcakground
document.addEventListener('DOMContentLoaded',()=>{
    colorDisplay.textContent = "White";
    background.style.backgroundColor = "White";
    colorDisplay.style.color = "White";
})
btn.addEventListener("click", ()=>{
    let Color = generateColor();
    colorDisplay.textContent = Color;
    background.style.backgroundColor = Color;
    colorDisplay.style.color = Color;
})

let menu = document.querySelector(".menu-container .menu");
let checkBox = document.querySelector("#check-box");
let menuIcon = document.querySelector("#menu-icon");

window.addEventListener("load", () => {
    checkBox.checked = false;
    menu.style.display = "none";
})

checkBox.addEventListener("change", () => {
    if(checkBox.checked){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }
})

function handleResize(){
    if(window.innerWidth > 640){
        checkBox.checked = false;
        menu.style.display = "none";
    }
}

handleResize(); // initial check
window.addEventListener("resize", handleResize);