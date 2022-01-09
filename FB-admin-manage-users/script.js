
let inputplaceholder = document.getElementById("inputplaceholder");
let abc = document.getElementById("choose");

abc.addEventListener("click",Func1);

//adjust the placeholder of searchbar
function Func1(){
let after = document.getElementById("after").value;
if (after == 1){
    inputplaceholder.placeholder ="Tìm theo tên";}
else if (after == 2)
    inputplaceholder.placeholder ="Tìm theo số";
else if (after == 3)
    inputplaceholder.placeholder ="Tìm theo Email";
else if (after == 4)
    inputplaceholder.placeholder ="Tìm theo tài khoản";
}


