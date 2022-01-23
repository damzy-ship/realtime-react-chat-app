import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore'


const firebaseApp = firebase
  .initializeApp({
    apiKey: "AIzaSyBM9PRZK4aFIoaAUlpfQhVEarCIZXHAr9E",
    authDomain: "dee-chat-c95eb.firebaseapp.com",
    projectId: "dee-chat-c95eb",
    storageBucket: "dee-chat-c95eb.appspot.com",
    messagingSenderId: "447106632867",
    appId: "1:447106632867:web:242c7f364ec5da21464316"
  });

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export { db, auth } 
  