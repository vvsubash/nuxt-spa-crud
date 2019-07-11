<template>
  <div>
    <button @click="signIn">login</button>
    <br />
    {{ Object.keys(this.$auth) }}
    {{ this.$auth.token }}
    <br />
    <div v-if="this.$auth.loggedIn">
      <router-link :to="'/' + this.$auth.user.sub + '/cows'"
        >LinkTitle</router-link
      >
      <button class="mx-auto bg-blue" @click="signOut">Signout</button>
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
