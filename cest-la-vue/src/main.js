import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
      path: "/user",
      component: () => import("@/views/UserPage.vue"),
    },
    {
      path: "/user/:name",
      component: () => import("@/views/UserDetailPage.vue"),
    },
  ],
});
app.use(pinia);
app.use(router);
app.mount("#app");
