<template>
  <div class>
    <h1 class="mt-8 text-green-dark">Form to add cow to database</h1>

    <form>
      <fieldset>
        <label for="nameField">Name</label>
        <input type="text" placeholder="CJ Patoilo" id="nameField">
        <label for="ageRangeField">Age Range</label>
        <select id="ageRangeField">
          <option value="0-13">0-13</option>
          <option value="14-17">14-17</option>
          <option value="18-23">18-23</option>
          <option value="24+">24+</option>
        </select>
        <label for="commentField">Comment</label>
        <textarea placeholder="Hi CJ …" id="commentField"></textarea>
        <div class="float-right">
          <input type="checkbox" id="confirmField">
          <label class="label-inline" for="confirmField">Send a copy to yourself</label>
        </div>
        <input class="button-primary" type="submit" value="Send">
      </fieldset>
    </form>
    <!-- <form @submit.prevent="addCow">
      <input v-model="name" placeholder="Name of cow">
      <input v-model="isMilking" placeholder="true">
      <button type="submit">Add New Cow</button>
    </form>-->
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