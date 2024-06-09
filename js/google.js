import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

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

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

let signInButton = document.getElementById('signInButton')
let signOutButton = document.getElementById('signOutButton')
let message = document.getElementById('message')
let username = document.getElementById('username')
let userEmail = document.getElementById('userEmail')
let imageGoogle = document.getElementById("imageGoogle")

  signOutButton.style.display = 'none';
  message.style.display = 'none'

  function signInWithGoogle (){
  signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
         window.location.href ="/index.html"
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
           
  });
}

function signOutUser (){
    signOut(auth).then(() => {
        alert('sign out ok!')
        window.location.reload()
      }).catch((error) => {
        // An error happened.
      });
      
}

onAuthStateChanged(auth, (user) => {
    if (user){
        signInButton.style.display = 'none'
        message.style.display = 'block'
        signOutButton.style.display = 'block'

        username.innerHTML = user.displayName;
        userEmail.innerHTML = user.email
        imageGoogle.src = user.photoURL
    }
})



signInButton.addEventListener('click', signInWithGoogle)
signOutButton.addEventListener('click', signOutUser)