/*
 * @Autor: QMZhao
 * @Date: 2021-09-09 21:35:49
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-15 21:46:52
 * @Description:
 * @FilePath: /vue-vite-template/src/types/utils.d.ts
 */
import type { ComputedRef, Ref } from "vue";
export type DynamicProps<T> = {
  [P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
};
