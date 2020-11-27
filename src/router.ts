import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/Home.vue";
import LoginPage from "@/pages/Login.vue";
import ListUsersPage from "@/pages/users/ListUsers.vue";

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
    component: ListUsersPage,
  },
  {
    path: "/users/edituser/:id",
    name: "edituser",
    component: () => import("@/pages/users/EditUser.vue"),
    params: (route: any) => ({
      user: route.params.user
    })
  },
  {
    path: "/users/adduser",
    name: "adduser",
    component: () => import("@/pages/users/AddUser.vue"),
  },
  {
    path: "/guides/add",
    name: "guides-add",
    component: () => import("@/guides/guide-add.vue"),
  }
  ,
  {
    path: "/guides/list",
    name: "guides-list",
    component: () => import("@/guides/guide-list.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;