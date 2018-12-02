<template>
  <div>
      <ul v-for="cow in cows" v-bind:key="cow.name">
          {{cow.belongsTo}}
      </ul>
  </div>
</template>

<script>
import db from "~/plugins/firebase.js";
export default {
  data() {
    return {
      cows: []
    };
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
    methods: {
    fetchData () {
      this.error = this.name = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      this.$bind('cows', db.collection('users/x/cows').doc(this.$route.params.name).collection("heatData")).then(cows => {
      this.cows === cows})
    }
  }

};
</script>

<style scoped>
</style>