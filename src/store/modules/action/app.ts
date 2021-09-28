/*
 * @Autor: QMZhao
 * @Date: 2021-09-02 09:43:18
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-15 21:54:39
 * @Description:
 * @FilePath: /vue-vite-template/src/store/modules/action/app.ts
 */
import { removeToken } from "/@/utils/session";

/**
 * 用户登录tokne
 *
 * @param param0
 * @param token
 */
const setUserToken = ({ dispatch }, token: string) => {
  removeToken();
  dispatch("GET_USER_TOKEN", token);
};

const setAppActions = {
  setUserToken
};

export default setAppActions;
