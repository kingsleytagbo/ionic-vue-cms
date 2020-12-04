<template>
  <div id="page-template">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!(authentication && (authentication.loggedin === true))" to="/login">Login</router-link>
      <router-link v-if="(authentication && (authentication.loggedin === true))" to="#" @click="logoutUser">Logout</router-link> | 
      <router-link to="/users">Users</router-link>
    </div>
    <router-view />
    <Footer/>
  </div>
</template>
<script type="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Page",
  computed: {
    ...mapState({
      authentication: state => state.USERS.authentication
    })
  },
  methods: {
    ...mapActions(["USERS/LOGOUT_USER"]),
    logoutUser() {
      this.$store.dispatch("USERS/LOGOUT_USER");
    }
  },
  components: {
    Header,
    Footer
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
