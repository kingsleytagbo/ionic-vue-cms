import { createApp, h } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router";
import User from '../src/models/User';
import  USERS  from "../src/store/user.store";

const store = createStore({
  state: {
      users: Array<User>(),
      user: null
  },
  getters: {
      getUsers(state) {
          return state.users
      },
      getUser(state) {
        return state.user
    },
  },
  mutations: {
    setUser (state, user?:any) {
      state.user = user;
    },
    addUser (state, user:User) {
      state.users.push(user)
    },
    addUsers (state, users:Array<User>) {
      state.users.concat(users)
    }
  },
  actions: {
    setUser(context, user: User){
      context.commit('setUser', user);
    }
  },
  modules: {
    USERS
  }
});

const app = createApp({
  // root instance definition
  render: () => h(App)
}).use(router);
app.use(store);
app.mount("#app");
