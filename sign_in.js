//Sign In Page:

let myUsers = localStorage.getItem("myUsers");

myUsers = JSON.parse(myUsers);

let signinemail = document.getElementById("signupemail");
let signinpassword = document.getElementById("signupPassword");
let error = document.getElementById("message");
let signinbutton = document.getElementById("signinbutton");

signinbutton.addEventListener("click", function(){
    myUsers.forEach(function(user){
        
    if ((user.useremail == signinemail.value || user.usermobile == signinemail.value) && user.userpassword == signinpassword.value){

    window.location.href = "index.html"
    let currentuser = user.usermobile;
    localStorage.setItem("currentuser", currentuser);

    }
    })
    setTimeout(function(){
        error.innerText = "Invalid Email or Password";
    }, 3000);
    
})


