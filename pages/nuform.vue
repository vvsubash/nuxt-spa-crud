<template>
  <div>
    <button @click="signIn">login</button>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },
  methods: {
    signIn() {
      this.provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(this.provider)
        .then(result => {
          // store the user ore wathever
          this.$router.push("/");
        })
        .catch(e => {
          this.$snotify.error(e.message);
          console.log(e);
        });
    }
  }
};
</script>
