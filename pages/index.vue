<template>
  <section class>
    <div>
      <logo/>
      <h1 class="title">nuxt-spa-tailwind-crud</h1>
      <h2 class="subtitle">My posh Nuxt.js project</h2>
      <div class="links">
        <a>
          <nuxt-link rel="preload" to="/cows">Cows</nuxt-link>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>

</style>
