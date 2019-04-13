<template>
  <section class>
    <div>
      <h1 class="title">nuxt-spa-tailwind-crud</h1>
      <h2 class="subtitle">My posh Nuxt.js project</h2>
      <div class="links">
        <a>
          <nuxt-link  to="/cows">Cows</nuxt-link>
        </a>
        <a>
          <nuxt-link  to="/img">Img</nuxt-link>
        </a>
        <a>
          <nuxt-link  to="/form">form</nuxt-link>
          <nuxt-link to="/cows">Cows</nuxt-link>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      // Logo
    }
  };
</script>

<style>
</style>
