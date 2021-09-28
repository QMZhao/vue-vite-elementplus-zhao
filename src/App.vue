<!--
 * @Autor: QMZhao
 * @Date: 2021-09-06 22:26:37
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-18 22:19:34
 * @Description: 
 * @FilePath: /vue-vite-template/src/App.vue
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from "./components/HelloWorld.vue";
import { ElConfigProvider } from "element-plus";

import zhCn from "element-plus/lib/locale/lang/zh-cn";
const locale = zhCn;
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" :val="[1, 2, 3]" /> -->
    <router-view></router-view>
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
