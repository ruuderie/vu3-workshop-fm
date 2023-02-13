import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import UserPage from "@/views/UserPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import App from "./App.vue";



const app = createApp(App)
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/login",
        component:  () => import("@/views/LoginPage.vue"),
    },
    {
        path: "/user",
        component: () => import("@/views/UserPage.vue"),
    }
    ]
})

app.use(router)
app.mount("#app")