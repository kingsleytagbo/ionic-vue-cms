<template>
  <ol><li>Vue from your html/js. No node.js, no build step, no webpack.</li></ol>
</template>

<script>
module.exports = {
  mounted () {
    console.log('Mounted')
  }
}
</script>

<style scoped>
  li {
    background-color: yellow;
  }
</style>