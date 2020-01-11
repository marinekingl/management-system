<template>
    <div>
        <ul>
            <li>
                <el-button @click="toUser">用户管理</el-button>
            </li>
            <li>
                <el-button @click="toPur">权限管理</el-button>
            </li>
            <li>
                <el-button @click="toOrder">商品管理</el-button>
            </li>
            <li>
                <el-button @click="toGoods">订单管理</el-button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "sidebar",
  component:{
      
  },
  methods:{
      toUser(){
          this.$router.push('/home/user')
      },
      toPur(){
          this.$router.push('/home/purview')
      },
      toGoods(){
          this.$router.push('/home/goods')
      },
      toOrder(){
          this.$router.push('/home/Order')
      }
  }
};
</script>
<style scoped>
    ul{
        text-align: center
    }
</style>
