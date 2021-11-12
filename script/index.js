
    var modal = document.getElementById("myModal")
var span = document.getElementsByClassName("close")[0]

function signIn(){
        modal.style.display = "block";
        modal2.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
  }
// signup window
var modal2 = document.getElementById("myModal2")
var span2 = document.getElementsByClassName("close2")[0]

function signUp(){
        modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
  }
      // signup

      
function validEmail() {
    let email = document.getElementById('email').value;
    let password = document.getElementById("password").value;

    let obj = {};
    if(email.length === 0){
        alert('Email should not be empty!');
        return;
    }
    for(let i = 0; i < email.length; i++){
        if(obj[email[i]] === undefined){
            obj[email[i]] = 1;
        }
        else{
            obj[email[i]] += 1;
        }
    }
    if(obj[' '] !== undefined){
        alert('Email should not contain any white-spaces!');
        return false;
    }
    if(obj['@'] !== 1){
        alert('Email should contain exactly 1 "@"!');
        return;
    }
    if(obj['.'] !== 1){
        alert('Email should contain exactly 1 "."');
        return;
    }

    let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let flag = false;
    if(password.length < 5){
        alert('Password should not be empty or it must be minimum 5 char!');
        return;
    }
    for(let i = 0; i < password.length; i++){
        for(let j = 0; j < specialChar.length;  j++){
            if(password[i] === specialChar[j]){
                flag = true;
                break;
            }
        }
        if(flag)
            break;
    }
    if(flag !== true){
        alert('Password must coantain one special char!');
        return false;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i].email === email){
            alert("User allready exist!")
            return;
        }
    }
}


      function createAcc(e){

e.preventDefault();
let myForm = document.getElementById("signup-form");
let name = myForm.name.value
let email = myForm.email.value
let mobile  = myForm.mobile.value
let password = myForm.password.value
console.log("data:",name,email, mobile, password);


if (localStorage.getItem('purpleDataBase')=== null){
localStorage.setItem("purpleDataBase", JSON.stringify([]));
}


let user ={
name: name,
email: email,
mobile: mobile,
password: password,
};

let arr = JSON.parse(localStorage.getItem("purpleDataBase"))

arr.push(user);
localStorage.setItem("purpleDataBase", JSON.stringify(arr))
window.location.href ="index.html"

}

    // login
    
    function Login(e){

        e.preventDefault();
             let Lform = document.getElementById("Lform");
             let mobile = Lform.mobile.value
        
         let all_users =JSON.parse(localStorage.getItem("purpleDataBase"));
        
         all_users.forEach(function (purpleDataBase) {
             if(mobile === purpleDataBase.mobile ){
              window.location.href ="index.html"
             }
             else{
               signUp()
             }
             
         });
        
        }
