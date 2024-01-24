
import firebase from 'firebase'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA46N4ngWY-R6Nopu_9Si9ej2d552nEQTk",
    authDomain: "redhawktweets.firebaseapp.com",
    projectId: "redhawktweets",
    storageBucket: "redhawktweets.appspot.com",
    messagingSenderId: "370180584813",
    appId: "1:370180584813:web:f3722b16478292956ed664",
    measurementId: "G-N5MGX7K02M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = app.firestore();

export default db;