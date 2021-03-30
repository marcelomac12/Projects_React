import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDhwzjjoC7MvQYoghl_jcAtf92XlXfQQqQ",
    authDomain: "trabalhoreact.firebaseapp.com",
    databaseURL: "https://trabalhoreact.firebaseio.com",
    projectId: "trabalhoreact",
    storageBucket: "trabalhoreact.appspot.com",
    messagingSenderId: "895476839395",
    appId: "1:895476839395:web:48b0a0f6649e6ae031e6d6",
    measurementId: "G-QR013NP9M2"
  };
// Initialize Firebase
if (!firebase.apps.length) {
   var app =  firebase.initializeApp(firebaseConfig);
 }
 const db = firebase.firestore(app);
 export default db;