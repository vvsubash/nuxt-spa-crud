<template>
  <div>
    <ul v-for="cow in cows" v-bind:key="cow.name">
      <p>
        <router-link :to="'/cows/' + cow.name">{{ cow.name }}</router-link>
        </p>
    </ul>
    {{cows}}
  </div>
</template>

<script>
import db from "~/plugins/firebase.js";
export default {
  data() {
    return {
      cows: null
    };
  },
  firestore: {
    cows: db
      .collection("users/x/cows")
  }
};
</script>

<style scoped>
</style>