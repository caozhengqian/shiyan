import Vue from "vue";
import All from "../views/comLife/All";
import Router from 'vue-router'
Vue.use(Router)

const constantRoutes = [
    {
        name: "index",
        path: "/",
        alias: "/index",
        component: () => import("../views/index")
    },
    { path: '/life', component: All },
    {
        name: "cssDongTai",
        path: "/cssDongTai",
        component: () => import("../views/cssDongTai")
    },
    {
        name: "forIfView",
        path: "/forIfView",
        component: () => import("../views/forIfView")
    },
    {
        name: "functionTo",
        path: "/functionTo",
        component: () => import("../views/functionTo")
    },
    {
        name: "propsTo",
        path: "/propsTo",
        component: () => import("../views/propsTo")
    },
    {
        name: "routerTo",
        path: "/routerTo",
        component: () => import("../views/routerTo")
    },
    {
        name: "vuexTo",
        path: "/vuexTo",
        component: () => import("../views/vuexTo")
    },
    {
        name: "formTo",
        path: "/formTo",
        component: () => import("../views/formTo")
    },
]
const createRouter = () => new Router({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router