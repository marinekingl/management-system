<template>
  <div class="login">
    <h3>后台管理系统</h3>
    <form action="" class="loginform">
      <div>
        <el-input v-model="loginForm.user" placeholder="用户名" class="user"></el-input>
      </div>
      <el-input v-model="loginForm.pwd" placeholder="密码" class="pwd"></el-input>
      <el-row>
        <el-button type="primary" class="loginbtn" @click.native.prevent="login">登录</el-button>
      </el-row>
    </form>
  </div>
</template>
<script>
import user from "../../../db";
export default {
  name: "login",
  data() {
    return {
      user: user,
      loginForm: {
        user: "",
        pwd: ""
      }
    };
  },
  methods: {
    login() {
      for (let i = 0; i < user.length; i++) {
        if (
          this.loginForm.user == user[i].username &&
          this.loginForm.pwd == user[i].password
        ) {
          this.$message.success("登录成功");
          return this.$router.push("/home");
        }
      }
    }
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
  border: 1px solid skyblue;
  text-align: center;
  color: rgb(102, 177, 255);
  border-radius: 5%;
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
