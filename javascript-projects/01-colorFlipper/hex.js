// #f312456 hex defines the hex colors starting with letter followed by 6 digit numbers
const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
const btn = document.getElementById("colorbtn");
const color = document.querySelector(".colorName");

// first click event followed by a loop for 6 times 

btn.addEventListener("click", function(){
let hexColor = "#";
for (let i=0; i<6; i++){
    hexColor += hex[getRandomNumber()];//using hex value creating a function togetrandomnum
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});
function getRandomNumber(){
return Math.floor(Math.random()* hex.length);//using hex length determining the color combo
}