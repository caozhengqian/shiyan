/*
 * @Author: King
 * @Page:
 * @Date: 2020-03-24 15:05:12
 * @Last Modified by: King
 * @Last Modified time: 2020-03-26 14:18:15
 * @FilePath: /src/router/index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
// 营销活动
import toRouter from "./module/toRouter";

Vue.use(VueRouter);

const routes = [
  ...toRouter,
  {
    name: "index",
    path: "/",
    alias: "/index",
    component: () => import("../views/OnePage")
  }
];
const router = new VueRouter({
  mode: "hash", //history hash
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to.params);
  next();
});

export default router;
