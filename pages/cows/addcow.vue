<template>
  <div class="bg-grey-lighter p-8 m-8 mx-auto container">
    <div class>
      <h1 class>This is a form</h1>
    </div>
    <div class="my-4 py-4">
      <input class="rr" v-model="name" type="text" placeholder="Name">
      <button @click="addCow">submit</button>
    </div>
  </div>
</template>

<script>
import db from "~/plugins/firestore.js";

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
.rr {
  @apply border-2;
  @apply rounded-lg;
  @apply h-12;
  @apply w-full;
}

.rr:focus {
  @apply outline-none;
}
.rr::placeholder {
  color: green;
  background-color: white;
  padding: 10px;
  @apply font-bold;
}
</style>