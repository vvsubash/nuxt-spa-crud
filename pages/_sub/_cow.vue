<template>
  <div>
    <!-- <input type="text" v-model="ncow" class="border-teal-darer select-none border">
    <button
      type="submit"
      @click.prevent="addCow"
      class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-lighter hover:border-transparent rounded"
    >Submit</button>
    <br>
    <div v-for="cow in cows" :key="cow.name" class="flex justify-start">
      <h2>{{cow.name}}</h2>
      <button
        type="submit"
        @click.prevent="deleteCow(pet)"
        class="bg-transparent hover:bg-red text-red font-semibold hover:text-white py-2 px-4 border border-red-lighter hover:border-transparent rounded"
      >Delete</button>
    </div>-->
    {{cow}}
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
      cow: null,
      y: "x",
      ncow: null
    };
  },
  firestore() {
    const uid = this.$auth.user.sub;
    const cowName = this.$route.params.cow;
    return {
      cow: db
        .collection("users")
        .doc(uid)
        .collection("cows")
        .doc(cowName)
    };
  },
  methods: {
    deleteCow: function(cow) {
      const index = this.cows.key;
      return alert(index);
    }
  }
};
</script>

<style scoped>
</style>