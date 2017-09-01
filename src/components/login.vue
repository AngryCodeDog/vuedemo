<template>
  <div class="login">
    <div>
	  <h2 class="title">系统登录</h2>
	</div>
    <div class="form">
		<center>
        <form v-on:submit.prevent="onSubmit">
      	  姓名： <input type="text" name="username" v-model="inputtext.name">
      			<br/>
      	  密码： <input type="password" name="mypwd" v-model="inputtext.mypassword">
		  <br/>
		  <input type="submit" value="登录">
        </form>
		<div class='tips'>账号密码随便填</div>
		</center>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      inputtext: {
        name: '',
        mypassword: ''
      }
    }
  },
  methods: {
    onSubmit: function () {
      if (this.inputtext.name === '') {
        alert('用户名不能为空')
        return
      }
      if (this.inputtext.mypassword === '') {
        alert('密码不能为空')
        return
      }

      console.log('click on submit : name=' + this.inputtext.name + '  pass=' + this.inputtext.mypassword)

      this.$router.push({ name: 'home' })
    }
  }

}
</script>

<style>

.title{
  text-align: center;
}

</style>
