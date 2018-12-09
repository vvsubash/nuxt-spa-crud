<template>
  <div>
    <!-- <ul v-for="cow in cows" v-bind:key="cow.name">{{cow.name}}</ul> -->
    {{cow}}
  </div>
</template>

<script>
import db from "~/plugins/firebase.js";
export default {
  data() {
    return {
      cow: null,
      name: null
    };
  },
  firestore() {
    return {
      cow : db.collection("users/x/cows").doc(this.$route.params.name)

    }
  }
};
</script>
