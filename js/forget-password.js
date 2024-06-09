import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js"

const firebaseConfig = { 
  apiKey : "AIzaSyBlPCRqQ4QxcWQBw_qEVfwj7yoGrhG3-CM" , 
  authDomain : "finalproject-197a8.firebaseapp.com" , 
  databaseURL : "https://finalproject-197a8-default-rtdb.firebaseio.com" , 
  projectId : "finalproject-197a8" , 
  storageBucket : "finalproject-197a8.appspot.com" , 
  messagingSenderId : "968183623607" , 
  appId : "1:968183623607:web:37af455d1da02fed894232" , 
  measurementId : "G-9YM060SYY7" 
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let formForgetPass = document.getElementById('forget_password')
formForgetPass.addEventListener("submit", function(event){
    event.preventDefault();

    let email = document.getElementById("email").value;

  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    alert("Password reset email sent. Please check your email inbox!")
    window.location.href = "/signin.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

})