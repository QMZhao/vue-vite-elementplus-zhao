/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-18 09:02:50
 * @LastEditTime: 2021-09-22 10:15:45
 * @Reference:
 */
import { reactive } from "vue";
import { Router } from "vue-router";

// 退出
function onLoginOut(privateRouter: Router): void {
  privateRouter.push({
    path: "/"
  });
}

export function useDashboardEvent() {
  return reactive({
    onLoginOut
  });
}
