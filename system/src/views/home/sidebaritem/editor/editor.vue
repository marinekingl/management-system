<template>
    <div>
        <el-button @click="back">回退</el-button>
        <div>{{}}</div>
    </div>
</template>

<script>
export default {
  name: "editor",
  props: {
    
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
};
</script>

<style scoped>
</style>
