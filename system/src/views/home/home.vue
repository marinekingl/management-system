<template>
    <div class="home">
        <el-container>
            <el-header style="border:1px solid red" class="header">
                <!-- 头部 -->
                <headerbar></headerbar>
            </el-header>
            <el-container>
                <el-aside width="200px" style="border:1px solid red" class="Sidebar">
                    <!-- 侧边栏 -->
                    <side-bar></side-bar>
                </el-aside>
                <el-main style="border:1px solid red" class="main">
                    <!-- 内容 -->
                    <router-view></router-view> 
                    
                </el-main>
            </el-container>
        </el-container>
        <!-- <router-link to="/home/zengjia">home2</router-link> -->
        <!-- <router-link to="/home/Delete">home3</router-link> -->
        
    </div>
</template>

<script>
    import headerbar from './header.vue'
    import sideBar from './Sidebar.vue'
    
export default {
  name: "home",
  components: {
      headerbar,
      sideBar,
  },
  methods: {}
};
</script>

<style scoped>

.main{
    height: 91vh;
}
</style>
