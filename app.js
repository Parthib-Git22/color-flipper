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