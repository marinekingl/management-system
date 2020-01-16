<template>
  <div class="login">
    <h3>后台管理系统</h3>
    <form action="" class="loginform">
      <div>
        <el-input v-model="user" placeholder="用户名" class="user"></el-input>
      </div>
      <el-input v-model="pwd" placeholder="密码" class="pwd" type="password"></el-input>
      <el-row>
        <el-button type="primary" class="loginbtn" @click.native.prevent="login">登录</el-button>
      </el-row>
    </form>
    <button @click="top">11111</button>
  </div>
</template>
<script>
// import {mapMutations, mapState} from 'vuex'
export default {
  name: "login",
  data() {
    return {
      user: "",
      pwd: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("login", {
        userS: this.user,
        pwdS: this.pwd
      })
      let flag = this.$store.state.print.flag
      if(flag){
        this.$message.success("登录成功");
        return this.$router.push("/home");
      }else{
        this.$message.error('登录失败');
      }
    },
    top(){
      console.log(this.$store.state.print.user);
    }
  },
  computed: {

  }
};
</script>

<style scoped>
.login {
  height: 300px;
  width: 400px;
  position: absolute;
  top: 30%;
  left: 50%;
  text-align: center;
  color: rgb(102, 177, 255);
  border-radius: 3%;
  box-shadow: 10px 10px 10px 10px rgba(236, 236, 236, 0.5);
  background-color: rgb(255, 255, 255);
}
.loginform {
  text-align: center;
}

.user,
.pwd,
.loginbtn {
  width: 300px;
  margin-top: 20px;
}
</style>
