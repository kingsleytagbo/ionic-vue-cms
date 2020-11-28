<template>
<div>
  <ol><li>Vue from your html/js. No node.js, no build step, no webpack.</li></ol>
  <h6>... /src/guides/html/components/features.vue</h6>
  </div>
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