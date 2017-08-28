<template>
  <div class="seller">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'seller',
  data () {
    return {
      msg: 'Welcome to the third page seller'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}

</style>
