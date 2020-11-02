<template>
  <div v-if="currentUser" class="add-form">
    <h2>Add User</h2>
    <form>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentUser.user_nicename"
        />
      </div>
      <div class="form-group">
        <label for="description">Password</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentUser.user_email"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentUser.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentUser.published"
      @click="createUser()"
    >
      Save
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="createUser()"
    >
      Save
    </button>

    <button type="submit" class="badge badge-warning mr-2" @click="cancelUser">
      Cancel
    </button>

    <button disabled class="badge badge-danger mr-2" @click="deleteUser">
      Delete
    </button>

    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import Api from "../../services/http";

export default {
  name: "adduser",
  data() {
    return {
      currentUser : null,
      message: ""
    };
  },
  methods: {
    getUser() {
      this.currentUser = {user_nicename: '', user_pass:'', published:0};
    },
    cancelUser() {
        this.$router.push({ path: "/users/" });
        return;
    },
    createUser() {
      Api.createUser(this.currentUser.user_nicename, this.currentUser.user_email, true)
        .then(response => {
          console.log(response);
          this.message = "The User was created successfully!";
          this.cancelUser();
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteUser() {
      Api.delete(this.currentUser.id)
        .then(response => {
          console.log(response);
          this.$router.push({ name: "Users" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = "";
    this.getUser();
  }
};
</script>

<style>
.add-form {
  margin: auto;
}
</style>
