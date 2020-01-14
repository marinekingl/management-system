<template>
    <div>
        <div class="search">
            <h3>搜索</h3>
            <el-input  placeholder="请输入查询信息"  v-model="search" style="width:700px"></el-input>
        </div>
        <div class="userList">
            <el-table stripe style="width: 100%" :data="tableData">
                <el-table-column prop='date' label="日期" width="180"></el-table-column>
                <el-table-column prop='username' label="用户名" width="180"></el-table-column>
                <el-table-column prop='phone' label="电话" width="180"></el-table-column>
                <el-table-column prop='address' label="地址"></el-table-column>
                <el-table-column width='100' fixed="right">
                    <el-button size="small" type='primary'>删除</el-button>
                </el-table-column>
            </el-table>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "user",
  data() {
    return {
        search:'',
        tableDatas:this.$store.state.print.data
    };
  },
  methods: {

  },
  computed: {
      tableData:function(){
          let table_data = this.tableDatas,
              search = this.search  
          if(!search){
              return table_data
          }
          table_data = table_data.filter(function(item){
              if(item.username.indexOf(search)!== -1){
                  return item
              }
              if(item.phone.indexOf(search)!== -1){
                  return item
              }
              if(item.address.indexOf(search)!== -1){
                  return item
              }
          })
          return table_data
      }
  },
};
</script>
<style scoped>
h3 {
  color: rgb(102, 177, 255);
}
.userList {
  margin-top: 30px;
}
</style>
