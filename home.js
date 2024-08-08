import { onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth } from "./config.js";

const logoutBtn =document.querySelector('#logout-btn')

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      
      console.log(uid);
      
    
    } else {
     window.location='index.html';
    }
  });



  logoutBtn.addEventListener('click',(event=>{

    signOut(auth)
    .then(() => {
      console.log('Sign-out successful.');
      window.location='index.html'
    })

    .catch((error) => {
 console.log(error);
  });

  }))