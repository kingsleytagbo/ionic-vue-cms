import { createApp, h } from "vue";
import { createStore } from 'vuex'
import App from "./App.vue";
import router from "./router";

const store = createStore({
  state: {
      posts: [],
      index:5
  },
  getters: {
      allPosts(state) {
          return state.posts
      },
  },
  mutations: {
    increase (state) {
      state.index++
    }
  },
  actions: {},
  modules: {}
});

const app = createApp({
  // root instance definition
  render: () => h(App)
}).use(router).use(store);

app.mount("#app");
