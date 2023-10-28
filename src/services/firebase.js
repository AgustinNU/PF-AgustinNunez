
import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEnTafzVNqxmJxcI3KGA5gzonSSmajFtw",
    authDomain: "sneakers-app-87305.firebaseapp.com",
    projectId: "sneakers-app-87305",
    storageBucket: "sneakers-app-87305.appspot.com",
    messagingSenderId: "435474834586",
    appId: "1:435474834586:web:dfa6c66e5efc7531132b23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };