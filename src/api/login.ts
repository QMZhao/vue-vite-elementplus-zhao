/*
 * @Autor: QMZhao
 * @Date: 2021-09-16 23:02:02
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-17 22:10:37
 * @Description:
 * @FilePath: /vue-vite-template/src/api/login.ts
 */
import request from "/@/utils/request";

export async function login<T>(data: T) {
  return request.post(`api/api/security_menu/app_menu_list`, data);
}
