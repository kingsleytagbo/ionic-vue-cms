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
    path: "/users/:id",
    name: "edituser",
    component: () => import("@/pages/users/EditUser.vue"),
    params: (route: any) => ({
      user: route.params.user
    })
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;