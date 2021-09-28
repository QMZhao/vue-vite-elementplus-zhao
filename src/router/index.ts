/*
 * @Author: QMZhao
 * @Date: 2020-12-30 09:49:48
 * @LastEditTime: 2021-09-22 09:39:30
 * @LastEditors: Please set LastEditors
 * @Description: 路由配置
 * @FilePath: /vue-vite-template/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("/@/views/login.vue"),
    meta: {
      title: "login",
      // 必须有token权限
      requireAuth: false
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("/@/views/dashboard/index.vue"),
    meta: {
      title: "dashboard",
      requireAuth: true
    }
  }
];

const router = createRouter({
  // history: createWebHashHistory(),
  // history: createWebHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
