<template>
  <div class="goods">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'goods',
  data () {
    return {
      msg: 'Welcome to the first page goods'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
