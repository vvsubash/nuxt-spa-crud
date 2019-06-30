<template>
  <div>
    <button @click="signIn">login</button>
    <br>
    {{this.$auth.user}}
    <br>
    <div v-if="this.$auth.loggedIn">
      <router-link :to="'/'+ this.$auth.user.sub +'/cows'">LinkTitle</router-link>
      <button class="mx-auto bg-blue" @click="signOut">Signout</button>
    </div>
  </div>
</template>
<script>
import db from "~/plugins/firestore.js";
import auth from "~/plugins/firebaseAuth.js";

export default {
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.$auth
        .loginWith("google")
        .then(result => {
          prompt(result.user.sub);
          // firebase
          //   .auth()
          //   .signInWithCustomToken(token)
          //   .catch(function(error) {
          //     // Handle Errors here.
          //     var errorCode = error.code;
          //     var errorMessage = error.message;
          //     // ...
          //   });
        })
        .catch(err => {
          console.log(err);
        });
    },
    signOut() {
      this.$auth.logout();
    }
  }
};
</script>
