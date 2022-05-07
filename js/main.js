//Template Name : SignIn & SignUp Form
//Author Name : Maedeh Alizadeh

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const passConfirm = document.getElementById('pass-confirm');

const usernameMsg = document.querySelector(".username-msg");
const emailMsg = document.querySelector(".email-msg");
const passwordMsg = document.querySelector(".password-msg");
const passConfirmMsg = document.querySelector(".passConfirm-msg");
const signupStatus = document.querySelector(".signup-status");

const signUpBtn = document.querySelector('.btn');




signUpBtn.addEventListener('click' , signUp);

function signUp (event) {
    event.preventDefault();

    usernameMsg.innerText = "";
    emailMsg.innerText = "";
    passwordMsg.innerText = "";
    passConfirmMsg.innerText = "";

    const usernameVal = usernameInput.value;
    const emailVal = emailInput.value;
    const passVal = passwordInput.value;
    const passConVal = passConfirm.value;
    
    let ifSendData = true;
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); // for validation email

    if( usernameVal.length === 0){
        usernameMsg.innerText = "Please enter your name.";
        ifSendData = false;
    };

    // validation email
    if ( emailVal.length === 0) {
        emailMsg.innerText = "Please enter your email.";
        ifSendData = false;
    }else if ( !emailRegex.test(emailVal) ){
        emailMsg.innerText = "Please enter your email correctly.";
        ifSendData = false;
    };

    // validation password
    if (passVal.length === 0) {
        passwordMsg.innerText = "Enter you password";
        ifSendData = false;
    } else if (passVal.length <= 4){
        passwordMsg.innerText = "Your password is short.";
        ifSendData = false; 
    };
    
    // validation confirm password 
    if ( passConVal.length === 0 ){
        passConfirmMsg.innerText = "Confirm your password.";
        ifSendData = false;
    } else if ( !(passVal === passConVal) ){
        passConfirmMsg.innerText = "You entered the password incorrectly.";
        ifSendData = false;
    };


    // fetch data to fake api
    if( ifSendData ) {
        const body = JSON.stringify({
            name : usernameVal,
            email : emailVal,
            password : passConVal
        });
        const headers = {
            "content-type" : "application/json"
        };
        fetch ( 'https://jsonplaceholder.typicode.com/users' , {
            method: "POST",
            body: body,
            headers: headers 
        })
            .then( response => {
                if(response.ok){
                    signupStatus.innerText ="You SingUp Successfully.";
                }
            });
    };
};
