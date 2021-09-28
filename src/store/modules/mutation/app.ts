/*
 * @Autor: QMZhao
 * @Date: 2021-09-02 09:19:50
 * @LastEditors: QMZhao
 * @LastEditTime: 2021-09-02 09:41:38
 * @Description:
 * @FilePath: /vite-admin-template/src/store/modules/mutation/app.ts
 */
import { IStoreState } from "/@/model/store";
import { setToken } from "/@/utils/session";

/**
 * 登录token
 *
 * @param state
 * @param token
 */
const GET_USER_TOKEN = (state: IStoreState, token: string) => {
  state.token = token;
  setToken(token);
};

const setAppMutation = {
  GET_USER_TOKEN
};

export default setAppMutation;
