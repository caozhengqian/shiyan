import Vue from 'vue'
import All from '../views/comLife/All'
import Router from 'vue-router'
Vue.use(Router)

const constantRoutes = [
  {
    name: 'index',
    path: '/',
    alias: '/index',
    component: () => import('../views/index')
  },
  {
    name: 'first',
    path: '/first',
    component: () => import('../views/first')
  },
  { path: '/life', component: All },
  {
    name: 'cssDongTai',
    path: '/cssDongTai',
    component: () => import('../views/cssDongTai')
  },
  {
    name: 'forIfView',
    path: '/forIfView',
    component: () => import('../views/forIfView')
  },
  {
    name: 'functionTo',
    path: '/functionTo',
    component: () => import('../views/functionTo')
  },
  {
    name: 'propsTo',
    path: '/propsTo',
    component: () => import('../views/propsTo')
  },
  {
    name: 'routerTo',
    path: '/routerTo',
    component: () => import('../views/routerTo')
  },
  {
    name: 'vuexTo',
    path: '/vuexTo/',
    component: () => import('../views/vuexTo/VuexTo')
  },
  {
    name: 'formTo',
    path: '/formTo',
    component: () => import('../views/formTo')
  },
  {
    name: 'watch',
    path: '/watch',
    component: () => import('../views/watch')
  },
  {
    name: 'layoutTo',
    path: '/layoutTo',
    component: () => import('../views/layoutTo')
  },
  {
    name: 'cssStyle',
    path: '/cssStyle',
    component: () => import('../views/cssStyle')
  },
  {
    name: 'ifTo',
    path: '/ifTo',
    component: () => import('../views/ifTo')
  },
  {
    name: 'listTo',
    path: '/listTo',
    component: () => import('../views/listTo')
  },
  {
    name: 'eventTo',
    path: '/eventTo',
    component: () => import('../views/eventTo')
  },
  {
    name: 'formbind',
    path: '/formbind',
    component: () => import('../views/formbind')
  },
  {
    name: 'comBase',
    path: '/comBase',
    component: () => import('../views/comBase')
  },
  {
    name: 'datePick',
    path: '/datePick',
    component: () => import('../views/DatePick')
  },
  {
    name: 'table',
    path: '/table',
    component: () => import('../views/Table')
  },
  {
    name: 'sync',
    path: '/sync',
    component: () => import('../views/Sync')
  },
  {
    name: 'keep',
    path: '/keep',
    component: () => import('../views/Keep/Keep')
  },
  {
    name: 'elementUis',
    path: '/elementUis',
    component: () => import('../views/ElementUis/ElementUis')
  }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
