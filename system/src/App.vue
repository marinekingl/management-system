<template>
  <div id="app">
    <!-- <home></home> -->
    <router-view></router-view>
  </div>
</template>
<script>
import home from "views/home/home.vue"
export default {
  name: "app",
  data() {
    return {

    };
  },
  components: {
    home
  },
  methods: {

  },
  computed: {
    
  }
};
</script>

<style scoped>
</style>
