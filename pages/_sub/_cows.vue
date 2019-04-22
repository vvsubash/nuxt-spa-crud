<template>
  <div>
    <p>{{cows}}</p>
    <br>
    <input type="text" v-model="ncow">
    <div class="border-2">
      <input type="button" @click="ac" class="h-12 w-32">
    </div>
  </div>
</template>

<script>
import db from "~/plugins/firestore.js";
export default {
  validate({ params, store }) {
    return params.sub == store.state.auth.user.sub;
  },
  transition: "bounce",
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
    ac() {
      db.collection("users")
        .doc(this.$auth.user.sub)
        .collection("cows")
        .doc(this.ncow)
        .set({
          name: this.ncow
        })
        .then(() => {
          console.log("user updated!");
        });
    }
  }
};
</script>

<style scoped>
</style>