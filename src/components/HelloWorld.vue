<script setup lang="ts">
import { withDefaults, ref } from "vue";
import { ElButton } from "element-plus";
import { login } from "/@/api/login";
import SvgIcon from "/@/components/SvgIcon/index.vue";

interface IPropData {
  msg: string;
  val: number[];
}

// defineProps<{ msg: string }>()
const props = withDefaults(defineProps<IPropData>(), {
  msg: "",
  val: () => {
    const list: number[] = [2];
    return list;
  }
});

const count = ref(0);
const value2 = new Date();

function testMap(num: number) {
  const map = new Map<number, () => void>([
    [
      1,
      () => {
        console.log("这是1");
      }
    ],
    [
      2,
      () => {
        console.log("这是2");
      }
    ],
    [
      3,
      () => {
        console.log("这是3");
      }
    ],
    [
      4,
      () => {
        console.log("这是4");
      }
    ]
  ]);
  const numMap = map.get(num);
  if (typeof numMap === "undefined") {
    return () => {
      console.log("object");
    };
  }
  return map.get(num);
}
testMap(1)?.();
function onSubmit() {
  const params = {
    roleId: 6
  };
  login(params).then((res) => {
    console.log(res);
  });
}
</script>

<template>
  <h1>{{ props.msg }}</h1>
  <h5>{{ props.val }}</h5>

  <svg-icon icon-class="cha" size="32"></svg-icon>

  <el-button type="primary" @click="onSubmit">123</el-button>
  <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code>
    for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code>
    to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
