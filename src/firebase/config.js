 import firebase from 'firebase/compat/app';
 import 'firebase/compat/storage';
 import 'firebase/compat/firestore';
 // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfZ_HXipQ2myK1OCkaIR90dIWa-xR5GoE",
  authDomain: "octane-b7861.firebaseapp.com",
  projectId: "octane-b7861",
  storageBucket: "octane-b7861.appspot.com",
  messagingSenderId: "651283965907",
  appId: "1:651283965907:web:b2adce1c384fbb9947b126",
  measurementId: "G-FYB9G06SNB"
};

// Initialize Firebase
// eslint-disable-next-line
firebase.initializeApp(firebaseConfig);


 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();
 const timestamp = firebase.firestore.FieldValue.serverTimestamp;

 export {projectStorage, projectFirestore,timestamp};