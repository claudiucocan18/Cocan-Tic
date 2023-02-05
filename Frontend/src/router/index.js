import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Burse from "../views/Burse.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/burse",
      name: "burse",
      component: Burse,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signup",
      name: "Sign-Up",
      component: SignUp,
    },
  ],
});

export default router;
