// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCR_bSbZCmZ2FYJGc8fKxNwz3f-2X_emPE",
  authDomain: "twitter-clone-1acab.firebaseapp.com",
  projectId: "twitter-clone-1acab",
  storageBucket: "twitter-clone-1acab.appspot.com",
  messagingSenderId: "1011701982156",
  appId: "1:1011701982156:web:226f191d4a44fe4e023369",
  measurementId: "G-SDKQE2H3CN",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
