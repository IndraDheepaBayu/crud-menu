//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'menu.index',
        component: () => import( /* webpackChunkName: "menu.index" */ '@/views/menu/IndexMenu.vue')
    },
    {
        path: '/create',
        name: 'menu.create',
        component: () => import( /* webpackChunkName: "menu.create" */ '@/views/menu/CreateMenu.vue')
    },
    {
        path: '/edit/:id',
        name: 'menu.edit',
        component: () => import( /* webpackChunkName: "menu.edit" */ '@/views/menu/EditMenu.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router