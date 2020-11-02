<template>
  <div class="vue-template">
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

export default {
  name: "Login",
  data() {
    return {
      authenticated: false,
      email: "",
      password: ""
    };
  },

  mounted() {},

  computed: {},

  methods: {
    loginUser() {
      const body = {
        login: {
          username: this.email,
          password: this.password
        }
      };
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
