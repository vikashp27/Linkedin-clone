import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDC-dVl1xCPC6QZA25KI22u9p_gAp7EZfw",
  authDomain: "linkedon-clone-b829a.firebaseapp.com",
  projectId: "linkedon-clone-b829a",
  storageBucket: "linkedon-clone-b829a.appspot.com",
  messagingSenderId: "367908264276",
  appId: "1:367908264276:web:4f55ab773c4f5448f750c1",
  measurementId: "G-E76HGX2G60",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
