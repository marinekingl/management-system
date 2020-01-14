<template>
    <div class="header">
        <h2>管理系统</h2>
        <el-button type="primary" @click="quitout">退出</el-button>
    </div>
</template>
<script>
export default {
  name: "headerbar",
  methods:{
    quitout(){
      this.$message.success('退出成功')
      this.$router.push('/login');
    }
  }
};
</script>
<style scoped>
.header button{
  margin-top: -53px;
  float: right;
  height: 44px;
  width: 80px;
}
.header h2{
    color: rgb(102,177,255);
    margin-top:10px; 
}
</style>
