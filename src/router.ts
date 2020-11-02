import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/Home.vue";
import LoginPage from "@/pages/Login.vue";
import UserListPage from "@/pages/users/UserList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/users",
    name: "users",
    component: UserListPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;