<template>
  <div class="goods">
    <el-table
      :data="subjcetTable"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="员工姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="员工信息"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="入职时间">
      </el-table-column>
      <el-table-column
        label="显示头像">
        <template slot-scope="scope">
          <img width="100px" height="100px" v-bind:src="scope.row.avatar">
        </template>
      </el-table-column>
      <el-table-column
        label="识别照片">
        <template slot-scope="scope">
          <img width="100px" height="100px" v-bind:src="scope.row.photos[0].url">
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="识别记录">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleClick(scope.$index,scope.row)" icon="el-icon-edit-outline">编辑</el-button>
          <el-button type="danger" size="small" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <template v-if="showeditdialog">
      <el-dialog
        title="提示"
        :visible.sync="showeditdialog"
        width="30%">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="showeditdialog = false">取 消</el-button>
          <el-button type="primary" @click="showeditdialog = false">确 定</el-button>
        </span>
      </el-dialog>
    </template>
  </div>
</template>

<script>
export default {
  name: 'usermanage',
  data () {
    return {
      showeditdialog: false,
      subjcetTable: []
    }
  },
  methods: {
    getsubjectlist: function () {
      var that = this
      this.$http.get('/api/subject/list', { params: {
        'category': 'employee',
        'size': 20,
        'cur_time': Date.parse(new Date())
      }}).then(response => {
        console.log(response.data.data)
        that.subjcetTable = response.data.data
      })
    },
    handleClick: function (index, val) {
      this.showeditdialog = true
    }

  },
  mounted: function () {
    this.getsubjectlist()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
