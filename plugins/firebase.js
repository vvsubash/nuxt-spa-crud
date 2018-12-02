import Vue from 'vue'
import firebase, { firestore } from "firebase";
import vuefire from 'vuefire'

Vue.use(vuefire)


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASmCb-ocsqqiuEWu99DbJChEVhHgSkZhk",
    authDomain: "samp-96c4e.firebaseapp.com",
    databaseURL: "https://samp-96c4e.firebaseio.com",
    projectId: "samp-96c4e",
    storageBucket: "samp-96c4e.appspot.com",
    messagingSenderId: "895306081831"
  })


 const db = firebaseApp.firestore();

 db.settings({
    timestampsInSnapshots: true
  });
  

  export default db