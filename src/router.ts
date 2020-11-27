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
    path: "/guides/guide1",
    name: "guide1",
    component: () => import("@/guides/gude1.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;