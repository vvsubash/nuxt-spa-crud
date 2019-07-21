<template>
  <section class>
    <div>
      <h1 class="title">nuxt-spa-tailwind-crud</h1>
      <h2 class="subtitle">My posh Nuxt.js project</h2>
      <div class="links">
        <a>
          <nuxt-link to="/cows">Cows</nuxt-link>
        </a>
        <a>
          <nuxt-link to="/img">Img</nuxt-link>
        </a>
        <a>
          <nuxt-link to="/form">form</nuxt-link>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    // Logo
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>

<style>
</style>
