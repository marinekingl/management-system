<template>
    <div class="header">
        <h2>管理系统</h2>
        <h4 class="username" >用户:{{username}}</h4>
        <el-button type="primary" @click="quitout">退出</el-button>
    </div>
</template>
<script>
// import {mapMutations} from 'Vuex'
export default {
  name: "headerbar",
  methods:{
    quitout(){
      this.$message.success('退出成功')
      this.$router.push('/login');
    }
  },
  computed:{
    username:function(){
      return this.$store.state.print.Form.userS
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
.username{
  position: absolute;
  left: 85%;
  top: 0;
  color:skyblue;
}
</style>
