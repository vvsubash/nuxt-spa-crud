<template>
  <div class="flex flex-wrap">
    <div class="w-1/3">
      <div class="flex flex-wrap">
        <div class="w-full">
          <img class="p-2-black shadow-lg border mb-2" v-bind:src=imgs[r] alt>
        </div>
        <div v-for="(img , index) in imgs" :key="index" class="w-1/3 pr-1 shadow">
            <div class="" @click="ss(index)" >
              <img v-bind:src=img alt="">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        "https://picsum.photos/200?image=1069",
        "https://picsum.photos/200?image=1055",
        "https://picsum.photos/200?image=1079",
      ],
      r: 0
    };
  },
  methods: {
    ss: function (index) {

      this.r = index
      
    }
  },
};
</script>

<style scoped>
</style>