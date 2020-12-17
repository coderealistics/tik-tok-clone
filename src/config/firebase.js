import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCcVB--yIGJMFdfYkjFh8pk23ie3ac-Cg0",
    authDomain: "tik-tok-clone-b2e6f.firebaseapp.com",
    projectId: "tik-tok-clone-b2e6f",
    storageBucket: "tik-tok-clone-b2e6f.appspot.com",
    messagingSenderId: "234020798580",
    appId: "1:234020798580:web:387654a24f02a5d3bd1121",
    measurementId: "G-FRHQNK5533"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;