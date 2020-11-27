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

export default {
  name: 'subscribe-user',
  data() {
    return {
      user: { email: '' }
    };
  },
  methods: {
    subscribe() {
      Api.post('/subscribe', this.user).then(result => {
        console.log({ result: result });
      });
    }
  },
  mounted() {},
  computed: {}
};
</script>
