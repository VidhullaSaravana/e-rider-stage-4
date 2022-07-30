import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCl2Kn93YH5aSlyBQ309MejHO60uWa2-fk",
    authDomain: "e-rider-stage-4-310e7.firebaseapp.com",
    projectId: "e-rider-stage-4-310e7",
    storageBucket: "e-rider-stage-4-310e7.appspot.com",
    messagingSenderId: "1049695544169",
    appId: "1:1049695544169:web:f837b4f93f0f60a6eed3f8"
  }




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


