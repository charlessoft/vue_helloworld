import { createRouter,createWebHashHistory} from "vue-router";
import home from '../views/home.vue'


const routes = [
    { path: "/", redirect: "/home" },
    {
        path: "/home",
        name: "home",
        component: home
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
