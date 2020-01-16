<template>
  <div>
    <div class="search">
      <h3>搜索</h3>
      <el-input placeholder="请输入查询信息" v-model="search" style="width:700px"></el-input>
    </div>
    <div class="userList">
      <el-table stripe style="width: 100%" :data="tableData" max-height="650">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="username" label="用户名" width="180"></el-table-column>
        <el-table-column prop="phone" label="电话" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index,tableData)"
              type="primary"
              size="small"
            >移除</el-button>
            <el-button type="primary" @click="editor(scope.$index)" class="editor" size="small">编辑</el-button>
          </template>
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
      search: ""
    };
  },
  methods: {
    deleteRow(index, rows) {
      this.$confirm("是否要删除此项", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          let tData = this.$store.state.print.user;
          tData.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除"
          });
        });
    },
    editor(index) {
      this.$router.push({ path: "/home/editor", query: { id: index } });
    }
  },
  computed: {
    tableData: function() {
      
      let table_data =this.$store.state.print.user,
        search = this.search;
      if (!search) {
        return table_data;
      }
      table_data = table_data.filter(function(item) {
        if (item.username.indexOf(search) !== -1) {
          return item;
        }
        if (item.phone.indexOf(search) !== -1) {
          return item;
        }
        if (item.address.indexOf(search) !== -1) {
          return item;
        }
      });
      return table_data;
    }
  }
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
