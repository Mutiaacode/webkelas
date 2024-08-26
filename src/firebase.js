// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDFxBUrq7pS7naLPVNgkBVB_EYI3Tbli0",
  authDomain: "web-kelas-rplb-2023.firebaseapp.com",
  projectId: "web-kelas-rplb-2023",
  storageBucket: "web-kelas-rplb-2023.appspot.com",
  messagingSenderId: "772554962961",
  appId: "1:772554962961:web:b078d9fb71edf67b2759b0",
  measurementId: "G-81JK2QQQK4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();