<template>
<div>
<h6>List Users</h6>
  <ul >
    <li v-for="user in users" :key="user.id">email: {{ user.email }} </li> 
  </ul>
  </div>
</template>

<script type="ts">
import Api from "../../services/http";
export default {
  name: "list-user",
  data() {
    return {
      user: []
    };
  },
  methods: {
    listUsers() {
      /* replace with an api call to get users */
      /* 
      Api.get("/list").then(result => {
        console.log({ result: result });
      });
      */
      return [{id:1, email: 'john@john'}, {id:2, email: 'steve@stev.com'}, {id:3, email: 'peter'}]
    }
  }
};
</script>
