import * as firebase from "firebase";
import "@firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBHMe14pNKkEbVEGlJKG6xZiBgd0MR1dA0",
  authDomain: "expophoneauth.firebaseapp.com",
  databaseURL: "https://expophoneauth.firebaseio.com",
  projectId: "expophoneauth",
  storageBucket: "expophoneauth.appspot.com",
  messagingSenderId: "584806732566",
  appId: "1:584806732566:web:af37625f6d1a4b7fd43637",
  measurementId: "G-RB3138LGQL",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
