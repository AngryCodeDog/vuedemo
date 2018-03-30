<template>
  <div id="homediv">

    <el-container class="container">
      <el-header>
        <el-row>
          <el-col :span="6">用户: {{username}}</el-col>
          <el-col :span="4" :offset="14"><el-button @click="exitlogin">退出</el-button></el-col>
        </el-row>
      </el-header>
      <el-container class="content_container">
        <el-aside width="200px">
                  <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                      <i class="el-icon-caret-right"></i>
                      <router-link to="/home/usermanage">用户管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="2">
                      <i class="el-icon-caret-right"></i>
                      <router-link to="/home/historyrecord">历史记录</router-link>
                    </el-menu-item>
                    <el-menu-item index="3">
                      <i class="el-icon-caret-right"></i>
                      <router-link to="/home/seller">门禁管理</router-link>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <i class="el-icon-caret-right"></i>
                      <span slot="title">导航四</span>
                    </el-menu-item>
                  </el-menu>
        </el-aside>
          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    exitlogin () {
      window.location.href = 'http://localhost:8080'
    }
  },
  created: function () {
    console.log('home.mounted')
    var that = this
    that.$root.Bus.$on('username', function (id) {
      console.log(1111)
      that.username = id
    })
  }
}

</script>




<style>
  .container {
    margin-left: 10%;
    margin-right: 10%;
  }
  .content_container {
    margin-top: 5%;
  }
  .el-header {
    margin-top: 5%;
    border-color: darkgray;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }




</style>
