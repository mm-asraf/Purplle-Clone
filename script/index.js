
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
window.location.href ="demo.html"

localStorage.setItem("purpleDataBase", JSON.stringify(arr))

}
    // login
    
    function Login(e){

e.preventDefault();
     let Lform = document.getElementById("Lform");
     let mobile = Lform.mobile.value

 let all_users =JSON.parse(localStorage.getItem("purpleDataBase"));

 all_users.forEach(function (purpleDataBase) {
     if(mobile === purpleDataBase.mobile ){
      window.location.href ="demo.html"
     }
     else{
       signUp()
     }
     
 });

}