//Function for checking email
function checkEmailValidate(email){
    let emailPattern = /^[0-9]{3}(adminFB)(@facebook-admin-id.com)$/;
    // The email starts with 3 number
    //after the number must be the "adminFB"
    // The email ends with facebook-admin-id.com
    
    

    if(emailPattern.test(email)){
        document.getElementById("emailHelp1").textContent='Mã Admin đã đúng định dạng';
        document.getElementById("emailHelp1").style.color='grey';
        check1 = true;
    }else{
        document.getElementById("emailHelp1").textContent='Chưa đúng chuẩn của mã Admin!';
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
        document.getElementById("passHelp1").textContent='Mật khẩu đã đúng định dạng';
        document.getElementById("passHelp1").style.color='grey';
        check2=true;
    }else{
        document.getElementById("passHelp1").textContent='Sai mật khẩu!';
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
        loginA.href="../FB-admin-manage-users/FB-admin-manage-user.html";
}