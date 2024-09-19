let username="";
function validateform(){
    console.log("Inside validate function");
    username  = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    localStorage.setItem('username',username);

    var usernameerror = document.getElementById("username-error");
    var passwordError = document.getElementById("password-error");

    usernameerror.innerHTML = "";
    passwordError.innerHTML = "";

    if(username === ""){
        usernameerror.innerHTML = "*Username is required";
        return false;
    }

    else if(password.length < 8){
        passwordError.innerHTML = "*Password must be atleast 8 characters";
        return false;
    }

    
    displayName();
    

    
}

function displayName(){
    console.log("Inside display function");
    let value1 = document.getElementById('profilename');
    value1.innerHTML = localStorage.getItem('username');
}

document.addEventListener('DOMContentLoaded', function() {
    displayName();
});





