<template>
  <div class="vue-template">
    <h3 v-if="(authentication && (authentication.loggedin === true))">You are Logged In</h3>
    <h3 v-if="!(authentication && (authentication.loggedin === true))">You are Not Logged In</h3>
    <div v-if="!authenticated">
      <form>
        <h3>Log In</h3>
        <div class="form-group">
          <label>Email address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control form-control-lg"
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control form-control-lg"
          />
        </div>

        <button
          type="submit"
          class="btn btn-dark btn-lg btn-block"
          @click="loginUser"
        >
          Sign In
        </button>

      </form>
    </div>
    <div v-else>
      <h4>You are logged-in!</h4>
    </div>
  </div>
</template>

<script type="ts">
import Api from "../services/http";
import User from '@/models/User';
import {  mapActions, mapState } from 'vuex';

export default {
  name: "Login",
  data() {
    return {
      authenticated: false,
      email: "",
      password: ""
    };
  },
  computed:{
 ...mapState({
       USERS: state => state.USERS.authentication
     })
  }
  ,methods: {
    ...mapActions(['USERS/LOGIN_USER'])
    ,loginUser() {
      const body = {
        login: {
          username: this.email,
          password: this.password
        }
      };
      const user = new User(this.email, this.password);
      this.$store.dispatch('USERS/LOGIN_USER', user);

      Api.post("/login", body).then(result => {
          if(result && result.authenticated){
                    this.authenticated = true;
          }
          else{
              this.authenticated = false;
          }
        console.log({ body: body, post: Api, result: result });
      });
    }
  }
};
</script>

<style></style>
