<template>
  <div>
    <Header />
    <h3>Login ...</h3>
    <Login />
    <Footer />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
export default {
  name: "LoginPage",
  components: {
    Login
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
