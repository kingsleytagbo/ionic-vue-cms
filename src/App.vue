<template>
  <div>
    <Header />
    <img alt="Vue logo" src="./assets/logo.png" />
    <Home v-bind="$attrs" msg="Build Your Next App in Vue Multi-Platform" />
    <Footer />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Home,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
