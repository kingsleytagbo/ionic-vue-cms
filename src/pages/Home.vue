<template>
  <div class="container body-content bg-white text-dark">
    <h3>Vue Roadmap</h3>
    <div class="custom-control custom-checkbox">
      <div>
          <input id="check1" type="checkbox" class="custom-control-input" checked="true">
          <label class="custom-control-label" for="check1">Components</label>
      </div>
      <div>
          <input id="check2" type="checkbox" class="custom-control-input" disabled>
          <label class="custom-control-label" for="check2">User Management</label>
      </div>
      <div>
          <input id="check3" type="checkbox" class="custom-control-input">
          <label class="custom-control-label" for="check3">Roles & Permissions</label>
      </div>
      <div>
          <input id="check4" type="checkbox" class="custom-control-input">
          <label class="custom-control-label" for="check4">Authentication & Authorization</label>
      </div>
      <div>
          <input id="check5" type="checkbox" class="custom-control-input">
          <label class="custom-control-label" for="check5">Searching</label>
      </div>
      <div>
          <input id="check6" type="checkbox" class="custom-control-input">
          <label class="custom-control-label" for="check6">Sorting</label>
      </div>
      <div>
          <input id="check7" type="checkbox" class="custom-control-input">
          <label class="custom-control-label" for="check7">Filtering</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
     components: {
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
