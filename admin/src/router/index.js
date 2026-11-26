import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import MainBox from "@/views/MainBox.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
});

export default router;
