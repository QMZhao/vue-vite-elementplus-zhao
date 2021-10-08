/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 10:08:11
 * @LastEditTime: 2021-10-08 16:21:22
 * @Reference:
 */
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import type { ResponseData } from "/@/types/axios";
import { useResponseErrorData } from "/@/composition/app-common/useAxios";
import { useErrorResponse } from "/@/hooks/common/useErrorResponse";
import { IErrorResponseData } from "/@/model/common/axiosOption";
import { getToken } from "/@/utils/session";

import { useMessage, useClearParams } from "/@/hooks/common";

const { createMessage } = useMessage();

const service = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API}`,
  // 30s 请求延时
  timeout: 30000,
  timeoutErrorMessage: `请求超时`,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
});

type PartialResponse = DeepPartial<AxiosResponse<IErrorResponseData<null>>>;

const errorResponse: PartialResponse = {
  data: useResponseErrorData(),
  status: -1
};

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.Authorization = getToken();
    config.data = useClearParams(config.data);
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.resolve(error.response);
  }
);

function useResponse(response: AxiosResponse): ResponseData {
  const { status: reponseStatsus, data: responsedData } = response ?? errorResponse;
  const { code, data, message } = responsedData;
  if (reponseStatsus === 200) {
    // code 可自行需要自行约定
    if (code !== 0) {
      createMessage({
        type: "error",
        duration: 1500,
        message
      });
    }
  }
  createMessage({
    type: "error",
    duration: 1500,
    message: useErrorResponse(reponseStatsus, message)
  });
  return data;
}

export default {
  get: <T>(url: string, params: T, headers?: any): Promise<AxiosRequestConfig> => {
    return service({
      method: "GET",
      url,
      params,
      headers
    }).then(useResponse);
  },
  post: <T>(url: string, data: T, headers?: any): Promise<AxiosRequestConfig> => {
    return service({
      method: "POST",
      url,
      data,
      headers: headers ?? {
        "Content-Type": "application/json"
      }
    }).then(useResponse);
  }
};
