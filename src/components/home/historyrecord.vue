<template>
  <div class="comment">
    <el-table
      :data="tableData"
      border
      stripe
      style="width: 100%">
      <el-table-column
        label="抓拍照片">
        <template slot-scope="scope">
          <img width="100px" height="100px" v-bind:src="scope.row.photo">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="识别照片"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="用户信息">
      </el-table-column>
      <el-table-column
        prop="address"
        label="抓拍位置">
      </el-table-column>
      <el-table-column
        prop="address"
        label="用户类型">
      </el-table-column>
      <el-table-column
        label="抓拍时间"
        width="180">
        <template slot-scope="scope">{{formatDate(scope.row)}}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {formatterDate} from '../../common/utils'

export default {
  name: 'historyrecord',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    gethistoryrecord: function () {
      let that = this
      this.$http.get('/api/get-history-record', { params: {
        'category': '',
        'start': '',
        'user_role': '',
        'size': 20,
        'cur_time': Date.parse(new Date())
      }}).then(response => {
        console.log(response.body)
        that.tableData = response.body.data
      }, response => {

      })
    },
    formatDate: function (val) {
      return formatterDate(val.timestamp * 1000)
    }
  },
  mounted: function () {
    this.gethistoryrecord()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
