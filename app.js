import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth } from "./config.js"


const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const register = document.querySelector('#register')

form.addEventListener('submit',(event)=>{
event.preventDefault();

signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
window.location='home.html'
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });


})