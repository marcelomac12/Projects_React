import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCkrwcgx7F6DuScX0xdKaOfmkhYLhQ-uNY",
    authDomain: "projeto-teste-3769b.firebaseapp.com",
    databaseURL: "https://projeto-teste-3769b.firebaseio.com",
    projectId: "projeto-teste-3769b",
    storageBucket: "projeto-teste-3769b.appspot.com",
    messagingSenderId: "731667100599",
    appId: "1:731667100599:web:1568e67ea2fbdfd5586e32",
    measurementId: "G-74MR5S13BS"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

 export default firebase;