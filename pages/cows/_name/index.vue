<template>
  <div>
    <!-- <ul v-for="cow in cows" v-bind:key="cow.name">{{cow.name}}</ul> -->
    {{cows}}
  </div>
</template>

<script>
import db from "~/plugins/firebase.js";
export default {
  data() {
    return {
      cows: null
    };
  },
  computed: {
    name() {
      return this.$route.params.name
    }
  },
  firestore: {
    cows : db
      .collection('users/x/cows/'+name+'/heatData')
  },
  created() {
    name = this.$route.params.name
  }
};
</script>

<style scoped>
</style>