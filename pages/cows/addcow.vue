<template>
<form @click="prevent.submit">
  <label for=""></label>
</form>
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