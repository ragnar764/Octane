 import * as firebase from 'firebase/app';
 import 'firebase/storage';
 import 'firebase/firestore';
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
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
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const projectStorage = firebase.storage();
 const projectFirestore = firebase.firestore();

 export {projectStorage, projectFirestore};