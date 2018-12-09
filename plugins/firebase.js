import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/firestore';
import vuefire from 'vuefire'

Vue.use(vuefire)


var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASmCb-ocsqqiuEWu99DbJChEVhHgSkZhk",
    databaseURL: "https://samp-96c4e.firebaseio.com",
    projectId: "samp-96c4e",
  })


 const db = firebaseApp.firestore();

 db.settings({
    timestampsInSnapshots: true
  });
  

  export default db