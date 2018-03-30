<template>
  <div class="login">
    <div>
	  <h2 class="title">系统登录</h2>
	</div>
    <div class="form">
      <el-col :span="8" :offset="8">
      <el-form :label-position="labelPosition" label-width="80px" :model="inputtext">
        <el-form-item label="用户名">
          <el-input v-model="inputtext.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="inputtext.mypassword"></el-input>
        </el-form-item>
         <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
      </el-col>

        <!--<form v-on:submit.prevent="onSubmit">
      	  姓名： <input type="text" name="username" v-model="inputtext.name">
      			<br/>
      	  密码： <input type="password" name="mypwd" v-model="inputtext.mypassword">
		  <br/>
      验证码：<input type="text" name="captchas" v-model="inputtext.captchas">
      <br/>
      <img id="img" src="http://192.168.1.50/auth/verify-code.jpg">
      <a href="#" v-on:click="reImg">看不清，换一张</a>  
      <br/>
		  <input type="submit" value="登录">
        </form>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      inputtext: {
        name: 'ztd@megvii.com',
        mypassword: '123456'
      },
      labelPosition: 'right'
    }
  },
  methods: {
    onSubmit: function () {
      var that = this
      if (this.inputtext.name === '') {
        alert('用户名不能为空')
        return
      }
      if (this.inputtext.mypassword === '') {
        alert('密码不能为空')
        return
      }

      this.$http.post('/api/auth/login', {
        'username': that.inputtext.name,
        'password': that.inputtext.mypassword,
        'captchas': that.inputtext.captchas
      }).then(response => {
        console.log(response.body.data.username)
        that.$root.Bus.$emit('username', response.body.data.username)
        that.$router.push({ name: 'home' })
      }, response => {

      })
    },
    reImg: function () {
      var img = document.getElementById('img')
      img.src = 'http://192.168.1.50/auth/verify-code.jpg?rnd=' + Math.random()
      console.log(document.cookie)
    }
  },
  created: function () {
    console.log('created')
  },
  beforeDestroy () {
  }

}
</script>

<style>

.title{
  text-align: center;
}

</style>
