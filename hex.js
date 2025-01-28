let colorDisplay = document.querySelector("#color-shown");
let btn = document.querySelector(".btn");
let background = document.querySelector(".container");

let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

let generateColor = ()=>{
    let color ="#"; // hex code of color
    for(let i=0;i<6;i++){
        let randInd = Math.floor(Math.random()*hex.length);
        color += hex[randInd];
    }
    return color;
}
// loading the initial bcakground
document.addEventListener("DOMContentLoaded",()=>{
    colorDisplay.textContent = "#FFFFFF";
    background.style.backgroundColor = "#FFFFFF";
    colorDisplay.style.color = "#FFFFFF";
})
btn.addEventListener("click",()=>{
    let colorStr = generateColor();
    console.log(colorStr);
    colorDisplay.textContent = colorStr;
    background.style.backgroundColor = colorStr;
    colorDisplay.style.color = colorStr;
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