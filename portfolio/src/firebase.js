import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDgrIMhxc577p8DduwRB7CwI1J-yIBqUNg",
    authDomain: "portfolio-f343e.firebaseapp.com",
    projectId: "portfolio-f343e",
    storageBucket: "portfolio-f343e.appspot.com",
    messagingSenderId: "538554356639",
    appId: "1:538554356639:web:9631ecd444b3bb9a89e3aa"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;