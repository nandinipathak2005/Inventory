
import { initializeApp } from "firebase/app";

import {getFirestore}   from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "inventory-management-48cfc.firebaseapp.com",
  projectId: "inventory-management-48cfc",
  storageBucket: "inventory-management-48cfc.appspot.com",
  messagingSenderId: "214131096979",
  appId: "1:214131096979:web:2e905b9a1ad279803fbc66",
  measurementId: "G-7E4PW0S4WK"
};


const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}