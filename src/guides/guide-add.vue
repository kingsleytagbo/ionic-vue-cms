<template>
<div>
<form>
<label>Email:</label>
<label for="title">Email</label>
<input type="text" class="form-control" id="email" v-model="user.email" />
<button @click="subscribe()">Subscribe</button>
</form>
</div>
</template>

<script type="ts">
import Api from "../services/http"; 
export default {
  name: 'add-user',
  data() {
    return {
      user: { email: '' }
    };
  },
  methods: {
    subscribe() {
<<<<<<< HEAD
      /*
=======
      /* replace with a valid api call to subscribe a user */
>>>>>>> 36350aa3efe2bb5d9832cfa20e670a6ff8c76f77
      Api.post('/subscribe', this.user).then(result => {
        console.log({ result: result });
      });
      */
    }
  },
  mounted() {},
  computed: {}
};
</script>
