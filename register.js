import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth,db } from "./config.js"
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"; 



const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const register = document.querySelector('#register')

form.addEventListener('submit',async(event)=>{
    event.preventDefault();

    try {

      const docRef =await addDoc(collection(db, "users"), {
        firstName:firstName.value ,
        lastName: lastName.value ,
        email:email.value ,
        
  
      });
      console.log(docRef.id);
 
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    

    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    window.location= 'index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    
  });

})



