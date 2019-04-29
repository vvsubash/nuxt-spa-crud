<template>
  <div>
    <button @click="signIn">login</button>
    <br>
    {{this.$auth.user}}
    <br>
    <div v-if="this.$auth.loggedIn">
      <router-link :to="'/'+ this.$auth.user.sub +'/cows'">LinkTitle</router-link>
      <button @click="signOut">Signout</button>
    </div>
  </div>
</template>
<script>
import db from "~/plugins/firestore.js";

export default {
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.$auth.loginWith("google");
    },
    signOut() {
      this.$auth.logout();
    }
  }
};
</script>
