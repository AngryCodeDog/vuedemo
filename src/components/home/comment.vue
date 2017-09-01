<template>
  <div class="comment">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'comment',
  data () {
    return {
      msg: 'Welcome to the two page comment!'
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
