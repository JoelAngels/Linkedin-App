import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADXUBgA7Wk4GxjMCsSg4taIFMiHq8KgeM",
  authDomain: "linkedin-app-ja.firebaseapp.com",
  projectId: "linkedin-app-ja",
  storageBucket: "linkedin-app-ja.appspot.com",
  messagingSenderId: "859884917146",
  appId: "1:859884917146:web:1716dcf91f44924f9c2a23",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
//lets get the database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
