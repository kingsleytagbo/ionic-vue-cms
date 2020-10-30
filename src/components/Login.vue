<template>
    <div class="vue-tempalte">
        <div v-if="!submitted"> 
                <form>
                    <h3>Log In</h3>

                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" id="email" v-model="email" class="form-control form-control-lg" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" id="password" v-model="password" class="form-control form-control-lg" />
                    </div>

                    <button type="submit" class="btn btn-dark btn-lg btn-block" @click="loginUser">Sign In</button>

                    <p class="forgot-password text-right mt-2 mb-4">
                        <router-link to="/forgot-password">Forgot password ?</router-link>
                    </p>

                </form>
        </div>
        <div v-else>
            <h4>You are logged-in!</h4>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      submitted: false,
      email: "",
      password: ""
    };
  },

  mounted() {},

  computed: {},

  methods: {
    loginUser() {
      const user = {
        email: this.email,
        password: this.password
      };
      console.log({ user: user });
      this.submitted = true;
    }
  }
};
</script>

<style>
</style>
