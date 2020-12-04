import { createApp, h } from "vue";
import { createStore } from 'vuex';
import App from "./App.vue";
import router from "./router";
import User from '../src/models/User';
import  USERS  from "../src/store/user.store";

const store = createStore({
  state: {
      user: null
  },
  getters: {
      getUser(state) {
        return state.user
    },
  },
  mutations: {
    setUser (state, user?:any) {
      state.user = user;
    },
  },
  actions: {
    setUser(context, user: any){
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
