import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import MainBox from "@/views/MainBox.vue";
import RoutesConfig from "./config";
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

let isAddRouter = false;

router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next();
    return;
  } else {
    if (!localStorage.getItem("token")) {
      next({
        path: "/login",
      });
      return;
    } else {
      if (router.hasRoute(to.name)) {
        next();
      } else {
        ConfigRouter();
        next();
      }
    }
  }
});

const ConfigRouter = () => {
  RoutesConfig.forEach((item) => {
    router.addRoute("mainbox", item);
  });
};
export default router;
