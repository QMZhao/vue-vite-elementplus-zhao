/*
 * @Autor: QMZhao
 * @Date: 2021-09-08 23:54:23
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-22 22:45:31
 * @Description:
 * @FilePath: /vue-vite-template/src/main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";

import store, { storeKey } from "/@/store";
import router from "/@/router";

// import { registerGlobComponent } from "/@/components/registerGlobElementComponent";

import "virtual:svg-icons-register";

import "./permission"; // permission control

import "/@/styles/index.scss";

const app = createApp(App);

app.use(store, storeKey).use(router).mount("#app");
