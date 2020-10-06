/*
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

*/

import { createApp, h } from "vue";
import App from "./App.vue";
const app = createApp({
  // root instance definition
  render: () => ( h(App) )
});

app.mount("#app");

