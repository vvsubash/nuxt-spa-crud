<template>
  <div>
      <ul v-for="cow in cows" v-bind:key="cow.name">
          {{cow.name}}
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
    cows: db.collection("users/x/cows").doc("padda").collection('heatData')
  }
};
</script>

<style scoped>
</style>