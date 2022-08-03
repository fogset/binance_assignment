import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListView from "../views/ListView.vue";

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: HomeView,
    },
    {
        path: "/List",
        name: "List",
        component: ListView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
