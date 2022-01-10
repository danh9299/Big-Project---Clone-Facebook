let theme = document.getElementById("theme");
let head = document.getElementById("head");
let info = document.getElementById("info");
let note = document.getElementById("note");
let left = document.getElementById("left");

var check = 1;

theme.addEventListener("click",themeChange);


function themeChange(){
    if(check == 1){
    left.style.backgroundColor = "#5F615E";
    info.style.color = "white";
    note.style.color = "white";
    head.style.backgroundColor = "green";
    document.body.style.backgroundColor ="black";
    theme.style.backgroundColor="yellow";
    check = 2;}
    else if (check ==2){
        info.style.color ="black";
        note.style.color ="black";
        left.style.backgroundColor = "silver";
        head.style.backgroundColor = "rgb(153, 92, 145)";
        document.body.style.backgroundColor ="rgb(167, 167, 255)";
        theme.style.backgroundColor = "silver";
        check = 1;}
}

