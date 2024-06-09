import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  doc,
  setDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const db = getFirestore(app);

const formSignUp = document.getElementById("form-signup");
formSignUp.addEventListener("submit", async (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password);

  updateProfile(auth.currentUser, {
    displayName: firstName + " " + lastName,
  });

  await setDoc(doc(db, "users", auth.currentUser.uid), {
    firstName,
    lastName,
    email,
    password,
  });

  alert("Register Successfully!");
  window.location.href = "/index.html";
});
