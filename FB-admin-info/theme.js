let theme = document.getElementById("theme");
let head = document.getElementById("head");
let cpi = document.getElementById("card-per-info");

let left = document.getElementById("left");

var check = 1;

theme.addEventListener("click",themeChange);


function themeChange(){
    if(check == 1){
    left.style.backgroundColor = "#5F615E";
    cpi.style.backgroundColor ="#D9C87C"; 
    head.style.backgroundColor = "green";
    document.body.style.backgroundColor ="black";
    theme.style.backgroundColor="yellow";
    check = 2;}
    else if (check ==2){
        cpi.style.backgroundColor = "indianred";
        left.style.backgroundColor = "silver";
        head.style.backgroundColor = "rgb(153, 92, 145)";
        document.body.style.backgroundColor ="rgb(167, 167, 255)";
        theme.style.backgroundColor = "silver";
        check = 1;}
}

