<template>
  <div>
    <!-- <ul v-for="cow in cows" v-bind:key="cow.name">{{cow.name}}</ul> -->
    <router-link :to="'/cows/' + this.$route.params.name+ '/addhd'">add {{ cow.name }} heat data</router-link>
    {{cow}}
  </div>
</template>

<script>
import db from "~/plugins/firestore.js";
export default {
  data() {
    return {
      cow: []
    };
  },
  firestore() {
    return {
      cow: db.collection("users/x/cows").doc(this.$route.params.name)
    };
  }
};
</script> ̰
 ̰