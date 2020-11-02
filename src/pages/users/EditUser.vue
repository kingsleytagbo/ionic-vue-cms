<template>
  <div v-if="currentUser" class="edit-form">
    <h2>Edit User</h2>
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
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteUser">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateUser">
      Update
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
  name: "edit-user",
  data() {
    return {
      currentUser: null,
      message: ""
    };
  },
  methods: {
    getUser(user) {
      this.currentUser = JSON.parse(user);
    },
    updatePublished(status) {
      var data = {
        id: this.currentUser.id,
        title: this.currentUser.title,
        description: this.currentUser.description,
        published: status
      };
      Api.update(this.currentUser.id, data)
        .then(response => {
          this.currentUser.published = status;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateUser() {
      Api.update(this.currentUser.id, this.currentUser)
        .then(response => {
          console.log(response);
          this.message = "The User was updated successfully!";
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
    this.getUser(this.$route.params.user);
    console.log({id: this.$route.params.id, user: this.currentUser});
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
