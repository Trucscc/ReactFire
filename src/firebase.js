import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVKP8BILaBdxl9heqNfIjS5Y7Cdak-jTU",
  authDomain: "controll-auto.firebaseapp.com",
  //databaseURL: "https://controll-auto-default-rtdb.firebaseio.com",                   //Secrect:  wqyCVwBRLJtOuFmXVVBVbPlPgPAa8r2Ku3PxteuU
  projectId: "controll-auto",
  storageBucket: "controll-auto.appspot.com",
  messagingSenderId: "506874668979",
  appId: "1:506874668979:web:b50ba2870035926ba5cdc6"
  // apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
  // authDomain: "fir-auth-1132.firebaseapp.com",
  // projectId: "fir-auth-1132",
  // storageBucket: "fir-auth-1132.appspot.com",
  // messagingSenderId: "1029021654707",
  // appId: "1:1029021654707:web:14aa4dee98449061701ac6",
  // measurementId: "G-MFP6M081T7",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;