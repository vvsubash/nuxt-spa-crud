<template> 
  <div @keyup.enter="addCow">
    <input type="text" v-model="ncow" class="border-teal-darer select-none border" />
  <div>
    <button
      type="submit"
      @click.prevent="addCow"
      class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-lighter hover:border-transparent rounded"
    >Submit</button>
    <br />
    <div v-for="cow in cows" :key="cow.name" class="flex justify-around">
      <h2 class="p-4">{{cow.name}}</h2>
      <button
        type="submit"
        @click.prevent="deleteCow(cow.name)"
        class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-lighter hover:border-transparent rounded"
      >Delete + {{cow.name}}</button>
    </div>
  </div>
</template>

<script>
import db from "~/plugins/firestore.js";
export default {
  validate({ params, store }) {
    return params.sub == store.state.auth.user.sub;
  },
  transition: {
    name: "bounce",
    mode: "out-in"
  },
  data() {
    return {
      cows: [],
      y: "x",
      ncow: null
    };
  },
  firestore() {
    const uid = this.$auth.user.sub;
    return {
      cows: db
        .collection("users")
        .doc(uid)
        .collection("cows")
    };
  },
  methods: {
    addCow() {
      db.collection("users")
        .doc(this.$auth.user.sub)
        .collection("cows")
        .doc(this.ncow)
        .set({
          name: this.ncow
        })
        .then(() => {
          console.log("cow added!");
        });
    },
    deleteCow: function(name) {
      console.log(name);
    }
  }
};
</script>

<style scoped>
</style>