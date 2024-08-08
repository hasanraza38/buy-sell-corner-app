import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth,db } from "./config.js"
import { collection, addDoc, getDocs  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 



const email = document.querySelector('#email')
const password = document.querySelector('#password')
const form = document.querySelector('#form')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const register = document.querySelector('#register')
let userUid =''

form.addEventListener('submit',async(event)=>{
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    userUid=user.uid;
      // console.log(user.uid);
    
    // window.location= 'index.html'
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
    
    });



    try {

      const docRef = await addDoc(collection(db, "user's"), {
        firstName:firstName.value ,
        lastName: lastName.value ,
        email:email.value ,
        uid:userUid,    
  
      });
      console.log(docRef.id);
 
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
    


})



