import Vue from "vue";
import firebase, { auth } from "firebase/app";
import "firebase/auth";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyASmCb-ocsqqiuEWu99DbJChEVhHgSkZhk",
  authDomain: "samp-96c4e.firebaseapp.com",
  databaseURL: "https://samp-96c4e.firebaseio.com",
  projectId: "samp-96c4e",
  storageBucket: "samp-96c4e.appspot.com",
  messagingSenderId: "895306081831",
  appId: "1:895306081831:web:128d5f5899e80d40"
});

export default auth;
