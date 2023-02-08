import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Burse from "../views/Burse.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import AddStudent from "../views/AddStudent.vue";
import EditStudent from "../views/EditStudent.vue";
import ChanceInterface from "../views/ChanceInterface.vue";
import { getUserState } from '../firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: false }
    },
    {
      path: "/burse",
      name: "burse",
      component: Burse,
      meta: { requiresAuth: false }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { requiresUnAuth: true } //unAuth
    },
    {
      path: "/signup",
      name: "Sign-Up",
      component: SignUp,
    },
    {
      path: "/addstudent",
      name: "add-student",
      component: AddStudent,
      meta: { requiresAuth: true }
    },
    {
      path: "/editstudent/:id",
      name: "edit-student",
      component: EditStudent,
      meta: { requiresAuth: true }
    },

    {
      path: "/delete/",
      name: "delete-student",
      meta: { requiresAuth: true }
    },

    {
      path: "/chance/",
      name: "chance-interf",
      component: ChanceInterface,
    },

    
  ],
});

//new
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAuth = await getUserState();
  const hasToken = localStorage.getItem("token");

  if (requiresAuth && (!isAuth&&!hasToken)) next('/login')
  else if (requiresUnauth && isAuth) next('/')
  else next()
})

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import Burse from "../views/Burse.vue";
// import Login from "../views/Login.vue";
// import SignUp from "../views/SignUp.vue";

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: Home,
//     },
//     {
//       path: "/burse",
//       name: "burse",
//       component: Burse,
//     },
//     {
//       path: "/login",
//       name: "login",
//       component: Login,
//     },
//     {
//       path: "/signup",
//       name: "Sign-Up",
//       component: SignUp,
//     },
//   ],
// });

// export default router;

