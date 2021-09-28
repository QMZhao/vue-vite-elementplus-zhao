<!--
 * @Autor: QMZhao
 * @Date: 2021-09-17 22:21:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-24 16:10:09
 * @Description: 
 * @FilePath: /vue-vite-template/src/views/dashboard/index.vue
-->

<template>
  <div class="w100 h100">
    <span>首页</span>
    <el-button type="text" @click="onLoginOut">退出</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "",
  components: {},
  setup() {
    const privateRouter = useRouter();

    function onLoginOut(): void {
      privateRouter.push({
        path: "/"
      });
    }
    return { onLoginOut };
  }
});
</script>
<style lang="scss" scoped></style>
