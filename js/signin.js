import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlPCRqQ4QxcWQBw_qEVfwj7yoGrhG3-CM",
  authDomain: "finalproject-197a8.firebaseapp.com",
  databaseURL: "https://finalproject-197a8-default-rtdb.firebaseio.com",
  projectId: "finalproject-197a8",
  storageBucket: "finalproject-197a8.appspot.com",
  messagingSenderId: "968183623607",
  appId: "1:968183623607:web:37af455d1da02fed894232",
  measurementId: "G-9YM060SYY7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInButton = document.getElementById("signInButton");
let formSignIn = document.getElementById("form-signin");

formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("displayName", user.displayName);
      alert("Sign In Successfully!");
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error("Error signing in with email and password:", error);
      alert("Failed to sign in: " + error.message);
    });
});

const userSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      localStorage.setItem("displayName", user.displayName);
      alert("Sign In Successfully!");
      window.location.href = "/index.html";
    })
    .catch((error) => {
      console.error("Error signing in with Google:", error);
      alert("Failed to sign in with Google: " + error.message);
    });
};

signInButton.addEventListener("click", userSignIn);
