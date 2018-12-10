<template>
  <div>
    <form @submit.prevent="addCow">
      <input v-model="name" placeholder="Name of cow">
      <input v-model="isMilking" placeholder="true">
      <button type="submit">Add new data</button>
    </form>
  </div>
</template>

<script>
import db from "~/plugins/firebase.js";

export default {
  data() {
    return {
      name: "", // <-- here
      isMilking: true // <-- here
    }
  },
  methods: {
    addCow()  {
      // <-- and here
      db.collection("users/x/cows/"+ this.$route.params.name + "/aggregateData")
        .doc('heatData')
        .set({ name: this.name, isMilking: this.isMilking })
        .then(function() {
          console.log("Document successfully written!");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    }
  }
};
</script>

<style scoped>
</style>