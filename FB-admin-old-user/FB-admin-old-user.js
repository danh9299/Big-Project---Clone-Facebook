let theme = document.getElementById("theme");
let head = document.getElementById("head");
let tblList = document.getElementById("tblList");
let left = document.getElementById("left");
let userList = document.getElementById("userList");
var check = 1;

theme.addEventListener("click", themeChange);


function themeChange() {
    if (check == 1) {
        userList.style.color = "white";
        left.style.backgroundColor = "#5F615E";
        tblList.style.backgroundColor = "brown";
        tblList.style.color = "black";
        head.style.backgroundColor = "green";
        document.body.style.backgroundColor = "black";
        theme.style.backgroundColor = "yellow";
        check = 2;
    } else if (check == 2) {
        userList.style.color = "black";
        left.style.backgroundColor = "silver";
        tblList.style.backgroundColor = "rgb(97, 97, 97)";
        tblList.style.color = "rgb(255, 255, 255)";
        head.style.backgroundColor = "rgb(153, 92, 145)";
        document.body.style.backgroundColor = "rgb(167, 167, 255)";
        theme.style.backgroundColor = "silver";
        check = 1;
    }
}