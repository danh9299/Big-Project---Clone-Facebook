//Function for checking email
function checkEmailValidate(email){
    let emailPattern = /.+@.+(.com)$/;

    // The email ends with .com
    // There must be string or char (no strict about the type) before @
    // There must be string or char (bo strict about the type) before .com and after @
    

    if(emailPattern.test(email)){
        document.getElementById("emailHelp1").textContent='Email đúng định dạng';
        document.getElementById("emailHelp1").style.color='grey';
        check1 = true;
    }else{
        document.getElementById("emailHelp1").textContent='Bạn nhập chưa đúng định dạng Email yêu cầu';
        document.getElementById("emailHelp1").style.color='red';
        check1=false;
    }
    
}
//function for checking password
function checkPasswordValidate(pass){
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // password has at least (1 upper case, 1 lower case, 1 symbol, 1 number,)
    //the password must contain at least 8 chars 
    if(passPattern.test(pass)){
        document.getElementById("passHelp1").textContent='Password đúng định dạng';
        document.getElementById("passHelp1").style.color='grey';
        check2=true;
    }else{
        document.getElementById("passHelp1").textContent='Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt:';
        document.getElementById("passHelp1").style.color='red';
        check2=false;
    }
}
// All the element joins the logining process
let txtEmail = document.getElementById("txtEmail");
let txtPass  = document.getElementById("txtPass");
let btnLogin = document.getElementById("btnforlogin");
let check1 = false; //the check1 is to see whether the email is correct with standard of Regex or not
let check2 = false;//the check2 is to see whether the password is correct with standard of Regex or not
let loginA = document.getElementById("loginA");

// Function
btnLogin.addEventListener("click",Func1);
function Func1(){  
    checkEmailValidate(txtEmail.value);
    checkPasswordValidate(txtPass.value);
    if (check1 == true & check2 == true)
        loginA.href="FB-client-newFeed.html";
}

