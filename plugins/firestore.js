import Vue from 'vue'
import firebase from "firebase/app";
import "firebase/firestore";
import {
  firestorePlugin
} from "vuefire";

Vue.use(firestorePlugin);

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASmCb-ocsqqiuEWu99DbJChEVhHgSkZhk",
  databaseURL: "https://samp-96c4e.firebaseio.com",
  projectId: "samp-96c4e"
});

const db = firebaseApp.firestore();


firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

export default db;