const username=document.getElementById("username");
const email =document.getElementById("email");
const password=document.getElementById("password");
const Confirmpassword=document.getElementById("Confirmpassword");

const form=document.getElementById("form");

const username_error=document.getElementById("username_error");
const email_error=document.getElementById("email_error");
const password_error=document.getElementById("password_error");


function Validate(){
let validation=false;
let email_check= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// username 
    if(username.value === '' ||username.value == null){
        validation=false;
        username_error.innerHTML="Username is required";
    }
    else{
        username_error.innerHTML=" ";
        validation=true;
    }
// email
    if(!email.value.match(email_check)){
        email_error.innerHTML="Valid Email is required";
        validation=false;
    }
    else{
        email_error.innerHTML=" ";
        validation=true;
    }
    // password
  
    if(password.value.length <=5){
        validation=false;
        password_error.innerHTML="Password must be more than 6 charactors";
    }
    if(password.value.length >=20){
        validation=false;
        password_error.innerHTML="Password cannot be more than 20 charactors";
    }
    if(password.value ===' password'){
        validation=false;
        password_error.innerHTML="Password cannot be password";
    }
    else{
        password_error.innerHTML=" ";
validation=true;
    }
    if(password.value!= Confirmpassword.value){
        validation=false;
    }
    else{
        validation=true;
    }
    return validation;
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Valid=Validate()
   if(Valid){
    let data={
        username:username.value,
        email:email.value,
        password:password.value,
        
    }
    console.log(data);
    alert("Form is successfully submitted.");
   }
});

// second part
let usernameicon=document.getElementById("usernameicon");
let emailicon=document.getElementById("emailicon");
let passwordicon=document.getElementById("passwordicon");
let Cpasswordicon=document.getElementById("Cpasswordicon");
// function success 
function Success(){

    let email_check= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// username 
console.log(username.value.length)
    if(username.value.length>3){
      usernameicon.style.display="flex";  
     usernameicon.classList.add("fa-circle-check");
     usernameicon.style.color="green";
     usernameicon.classList.remove("fa-circle-exclamation");
    username.style.border="1px solid green";


    }
    else{
        usernameicon.style.display="flex";  
        usernameicon.classList.remove("fa-circle-check");
     usernameicon.classList.add("fa-circle-exclamation");
     usernameicon.style.color="red";
     username.style.border="1px solid red";
    }


// email
    // if(email.value.match(email_check)){
        if(email_check.test(email.value)){
            emailicon.style.display="flex";  
        emailicon.classList.add("fa-circle-check");
        emailicon.style.color="green";
        emailicon.classList.remove("fa-circle-exclamation");
        email.style.border="1px solid green";
    }
    else{
        emailicon.style.display="flex";  
        emailicon.classList.remove("fa-circle-check");
        emailicon.classList.add("fa-circle-exclamation");
        emailicon.style.color="red";
        email.style.border="1px solid red";
    }
       
    // password
  
    if(password.value.length >=5 && password.value.length<20){
        passwordicon.style.display="flex";  
        passwordicon.classList.add("fa-circle-check");
        passwordicon.style.color="green";
        passwordicon.classList.remove("fa-circle-exclamation");
        password.style.border="1px solid green";
       
    }
   
    else{
        passwordicon.style.display="flex";  
        passwordicon.classList.remove("fa-circle-check");
        passwordicon.classList.add("fa-circle-exclamation");
        passwordicon.style.color="red";
        password.style.border="1px solid red";
    }
    // confirm password
    console.log(Confirmpassword.value);
    console.log(password.value);
    if(password.value === Confirmpassword.value && Confirmpassword.value.length>0){
        Cpasswordicon.style.display="flex";  
        Cpasswordicon.classList.add("fa-circle-check");
        Cpasswordicon.style.color="green";
        Cpasswordicon.classList.remove("fa-circle-exclamation");
        Confirmpassword.style.border="1px solid green";
        console.log(Confirmpassword.value);
        console.log("right pass")
    }
   
    else{
        Cpasswordicon.style.display="flex";  
        Cpasswordicon.classList.remove("fa-circle-check");
        Cpasswordicon.classList.add("fa-circle-exclamation");
        Cpasswordicon.style.color="red";
        Confirmpassword.style.border="1px solid red";
    }
   
}




