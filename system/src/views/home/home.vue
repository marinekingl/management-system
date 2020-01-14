<template>
    <div class="home">
        <el-container>
            <el-header :style=boxshadow class="header">
                <headerbar></headerbar>
            </el-header>
            <el-container>
                <el-aside :style=boxshadow width="200px" class="Sidebar">
                    <side-bar></side-bar>
                </el-aside>
                <el-main :style=boxshadow class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import headerbar from "./header/header.vue";
import sideBar from "./sidebar/Sidebar.vue";

export default {
  name: "home",
  components: {
    headerbar,
    sideBar
  },
  data(){
      return{
          
      }
  },
  methods: {
      
  },    
  computed:{
      boxshadow(){
          return 'box-shadow: 0 2px 4px rgba(73,137,244, .12), 0 0 6px rgba(73,137,244, .04)'
      }
  }
};
</script>

<style scoped>
.main {
  height: 91vh;
}
</style>
