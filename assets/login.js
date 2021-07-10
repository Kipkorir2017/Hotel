function validate(){
    var email=document.getElementById("form")("email").value;
    var password =document.getElementById("form")("password").value;
    // validating email
    atpos=email.IndexOf("@");
    dotpos =email.lastIndexOf(".");
    if(atpos <1 ||(dotpos - atpos < 2)){
        alert("please enter a correct email");
        return false;
            
        
    }
    // validating password
    if(password.length <= 6 ){
        alert("password should be more than 6 characters");
        return false;
    }
}