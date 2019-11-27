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

function fetchDataInto(projects = [], personFilter = "") {
  var collection = db.collection("projects");
  if (personFilter.trim() !== "") {
    collection = collection.where("person", "==", personFilter);
  }
  collection.onSnapshot(res => {
    const changes = res.docChanges();

    changes.forEach(change => {
      if (change.type === "added") {
        projects.push({
          ...change.doc.data(),
          id: change.doc.id
        });
      }
    });
  });
}

function addNewProject(project = {}, object) {
  db.collection("projects")
    .add(project)
    .then(() => {
      object.loading = false;
      object.dialog = false;
      object.$emit("projectAdded");
    });
}

export { db, fetchDataInto, addNewProject };
