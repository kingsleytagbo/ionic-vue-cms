<template>
  <div class="list row">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>

          <a
          class="btn btn-block btn-outline-info"
          @click="addUser()"
        >
          Add
        </a>

  
  <!-- BEGIN EDIT USER -->
    <div class="col-md-12">
      <div v-if="currentUser">
        <h4>Manage User</h4>
        <div>
          <label><strong>Username:</strong></label> {{ currentUser.user_nicename }}
        </div>
        <div>
          <label><strong>Email:</strong></label>
          {{ currentUser.user_email }}
        </div>

        <a
          class="btn btn-default btn-block badge badge-warning"
          @click="editUser(currentUser)"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a User...{{ getUser.user_nicename }}</p>
      </div>
    </div>
    <!-- END EDIT USER -->

        <div class="col-md-12">
      <h2>Users</h2>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveUser(user, index)"
        >
          {{ user.user_nicename }} : {{ user.user_email }}
        </li>
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllUsers">
        Remove All
      </button>
    </div>
    
  </div>
</template>

<script>
import Api from "../../services/http";
import User from '@/models/User';
import {  mapActions } from 'vuex';
export default {
  name: "ListUsersPage",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveUsers() {
      Api.getUsers(true)
        .then(response => {
          this.users = response;
          if(this.users && this.users.length > 0){
            //   this.setUser(this.users[0]);
            // console.log(this.users[0]);
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    addUser(){
        this.$router.push({ path: "/users/adduser" });
    },
    editUser(user) {
      this.$router.push({
        name: "edituser",
        id: user.id,
        params: { id: user.id.toString(), user: JSON.stringify(user) }
      });
    },
    refreshList() {
      this.retrieveUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },
    setActiveUser(User, index) {
      this.currentUser = User;
      this.currentIndex = index;
    },
    removeAllUsers() {
      Api.deleteAll()
        .then(response => {
          console.log(response);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchTitle() {
      Api.findByTitle(this.title)
        .then(response => {
          this.Users = response;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
     ...mapActions(['USERS/GET_USERS'])
  },
  mounted() {
    this.retrieveUsers();
    this.$store.dispatch('USERS/GET_USERS');
  },
  computed:{
    getUser(){
      const users = this.$store.state.USERS.users;
      if (users && users.length > 0)
      {
        return users[0];
      }
      else{
        return new User('', '');
      }
    }
  }
};
</script>

<style>
.list {
  margin: auto;
}
</style>
