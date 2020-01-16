<template>
    <div>
        <ul>
            <li slot="loginitem" v-for=" (item,key) in side">
                <el-button type='primary' @click="toDetail(key)">
                 {{side[key]}}</el-button>
            </li>
        </ul>
    </div>
</template>
<script>
import minsidebar from "components/minsidebar/minsidebar";
export default {
  name: "sidebar",
  data() {
    return {
      side: ["用户管理", "商品管理", "订单管理"],
      sidepath:['/user','/goods','/Order']
    };
  },
  component: {
    minsidebar
  },
  methods: {
    toDetail(key) {
        this.$router.push('/home'+this.sidepath[key])       
    }
  }
};
</script>
<style scoped>
ul {
  text-align: center;
  list-style: none;
  padding: 0;
}
ul li button{
   margin: 10px;
   width: 90%; 
}
</style>
