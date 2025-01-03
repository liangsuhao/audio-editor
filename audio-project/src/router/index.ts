import { createRouter, createWebHistory, } from 'vue-router'
import Home from '../pages/home.vue';

export const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'index',
        path: '/index',
        component: () => import("../pages/index.vue")
    }
]
const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from, next) => {
    next()
})
export default router