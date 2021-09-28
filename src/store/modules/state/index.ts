/*
 * @Autor: QMZhao
 * @Date: 2021-09-01 22:57:52
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-15 22:00:50
 * @Description:
 * @FilePath: /vue-vite-template/src/store/modules/state/index.ts
 */

import app from "./app";

import { IStoreState } from "/@/model/store";

export function setState(): IStoreState {
  return {
    ...app
  };
}
