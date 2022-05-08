//Template Name : SignIn & SignUp Form
//Author Name : Maedeh Alizadeh

// signup Event
const signupUsername = document.getElementById('signupUsername');
const signupEmail = document.getElementById('signupEmail');
const signupPassword = document.getElementById('signupPassword');
const passConfirm = document.getElementById('passConfirm');

const signupNameMsg = document.querySelector(".signupNameMsg");
const signupEmailMsg = document.querySelector(".signupEmailMsg");
const signupPassMsg = document.querySelector(".signupPassMsg");
const passConfirmMsg = document.querySelector(".passConfirmMsg");
const signupStatus = document.querySelector(".signup-status");

const signUpBtn = document.querySelector('.btn');

signUpBtn.addEventListener('click' , signUp);

function signUp (event) {
    event.preventDefault();

    signupNameMsg.innerText = "";
    signupEmailMsg.innerText = "";
    signupPassMsg.innerText = "";
    passConfirmMsg.innerText = "";

    const signupNameVal = signupUsername.value;
    const signupEmailVal = signupEmail.value;
    const signupPassVal = signupPassword.value;
    const passConVal = passConfirm.value;
    
    let ifSendData = true;
    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/); // for validation email

    if( signupNameVal.length === 0){
        signupNameMsg.innerText = "Please enter your name.";
        ifSendData = false;
    };

    // validation email
    if ( signupEmailVal.length === 0) {
        signupEmailMsg.innerText = "Please enter your email.";
        ifSendData = false;
    }else if ( !emailRegex.test(signupEmailVal) ){
        signupEmailMsg.innerText = "Please enter your email correctly.";
        ifSendData = false;
    };

    // validation password
    if (signupPassVal.length === 0) {
        signupPassMsg.innerText = "Enter you password";
        ifSendData = false;
    } else if (signupPassVal.length <= 4){
        signupPassMsg.innerText = "Your password is short.";
        ifSendData = false; 
    };
    
    // validation confirm password 
    if ( passConVal.length === 0 ){
        passConfirmMsg.innerText = "Confirm your password.";
        ifSendData = false;
    } else if ( !(signupPassVal === passConVal) ){
        passConfirmMsg.innerText = "You entered the password incorrectly.";
        ifSendData = false;
    };


    // fetch data to fake api
    if( ifSendData ) {
        const body = JSON.stringify({
            name : signupNameVal,
            email : signupEmailVal,
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

    signupUsername.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
    passConfirm.value = "";
};


// Login Event
const logInBtn = document.querySelector('.btn');
const loginUsername = document.getElementById('loginUsername');
const loginPass = document.getElementById('loginPass');

const loginNameMsg = document.querySelector('.loginNameMsg');
const loginPassMsg = document.querySelector('.loginPassMsg');

const loginStatus = document.querySelector(".login-status");

logInBtn.addEventListener('click' , logIn);

function logIn(event) {
    event.preventDefault();

    loginNameMsg.innerText = "";
    loginPassMsg.innerText = "";    
    let ifGetData = true;

    const loginNameVal = loginUsername.value;
    const loginPassVal = loginPass.value;

    if( loginNameVal.length === 0) {
        loginNameMsg.innerText = "PLease enter your name."
        ifGetData = false;
    };

    if( loginPassVal.length === 0) {
        loginPassMsg.innerText = "Please enter your password."
        ifGetData = false;
    };

    if(ifGetData) {
        loginStatus.innerText ="You Log In Successfully.";  
    };

    loginUsername.value = "";
    loginPass.value = "";
};
