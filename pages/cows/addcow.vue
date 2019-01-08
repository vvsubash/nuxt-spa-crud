<template>
  <div class>
    <h1 class="mt-8 text-green-dark">Form to add cow to database</h1>

    <form @submit.prevent="addCow">
      <fieldset>
        <input v-model="name" placeholder="Name of cow">
      </fieldset>
      <br>
      <fieldset>
        <input v-model="isMilking" placeholder="true">
      </fieldset>
      <br>
      <fieldset>
        <button type="submit">Add New Cow</button>
      </fieldset>
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
    };
  },
  methods: {
    addCow() {
      // <-- and here
      db.collection("users/x/cows")
        .doc(this.name)
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