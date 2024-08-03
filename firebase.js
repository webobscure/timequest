// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXJhVGsPlALyyV02b50dUc9RDZ06lFQ9k",
  authDomain: "timequest-73b3a.firebaseapp.com",
  projectId: "timequest-73b3a",
  storageBucket: "timequest-73b3a.appspot.com",
  messagingSenderId: "398289181418",
  appId: "1:398289181418:web:7eebc9b06cc1c2ce305593",
  measurementId: "G-C8MQYNZFXH"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);