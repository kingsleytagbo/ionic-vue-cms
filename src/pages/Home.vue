<template>
  <div class="container body-content bg-white text-dark">
    <h3>Vue Roadmap</h3>
    <div>
      <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;Components</span><br />
      </div>
      
      <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;User Management</span><br />
      </div>

      <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;Roles & Permissions</span><br />
      </div>

      <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;Authentication & Authorization</span><br />
      </div>

      <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;Searching</span><br />
      </div>

       <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;Filtering</span><br />
      </div>
       <div style="width:100%;">
          <span style="float:left;"><i class="fa fa-check fa-1x"></i>&nbsp;Sorting</span><br />
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
