/*
 * @Autor: QMZhao
 * @Date: 2021-09-01 22:54:44
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-15 21:59:56
 * @Description:
 * @FilePath: /vue-vite-template/src/store/modules/state/app.ts
 */

import { getToken } from "/@/utils/session";

const token = getToken() || "";

export default {
  token
};
