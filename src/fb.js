import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAeZv8RAb-tAsET9kbSftCgUoEqjXgeCRU",
  authDomain: "todo-ninja-vesca.firebaseapp.com",
  databaseURL: "https://todo-ninja-vesca.firebaseio.com",
  projectId: "todo-ninja-vesca",
  storageBucket: "todo-ninja-vesca.appspot.com",
  messagingSenderId: "532709879664",
  appId: "1:532709879664:web:313e4aadd68cda8160e9b5",
  measurementId: "G-YJR7JP7GFH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
