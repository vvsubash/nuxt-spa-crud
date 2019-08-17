<template>
  <div>
    <button @click="SignIn">signin with fb</button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    SignIn() {
      var credential = firebase.auth.GoogleAuthProvider.credential(
        this.$auth.getToken("google").substr(7)
      );
      firebase
        .auth()
        .signInWithCredential(credential)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // [START_EXCLUDE]
          if (errorCode === "auth/account-exists-with-different-credential") {
            alert(
              "You have already signed up with a different auth provider for that email."
            );
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
          // [END_EXCLUDE]
        })
        .then(() => {
          console.log("completed");
        });
    }
  }
};
</script>
