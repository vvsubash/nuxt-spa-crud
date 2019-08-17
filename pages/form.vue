<template>
  <div>
    <button @click="signIn">login</button>
    {{ this.$auth.getToken("google") }}
  </div>
</template>
<script>
import db from "~/plugins/firestore.js";
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.$auth.loginWith("google").catch(err => {
        console.log(err);
      });
    },
    signOut() {
      this.$auth.logout();
    }
  }
};
</script>
