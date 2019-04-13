<template>
  <div>
    <form action>
      <fieldset class="p-4">
        <label for="Name" class="text-xl font-medium">Name:</label>
        <input type="text" class="border-2 rounded-sm h-10 w-64 m-2">
      </fieldset>
      <br>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </form>
    <p>{{googleUser}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      googleUser: null
    };
  },
  updated: async function onSignIn(googleUser) {
    var profile = await googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
};
</script>
