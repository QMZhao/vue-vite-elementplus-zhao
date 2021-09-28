/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-09-10 17:37:16
 * @LastEditTime: 2021-09-22 09:22:22
 * @Reference:
 */
import { ElMessage } from "element-plus";
import { ref } from "vue";

/**
 * simple-message
 */
export function useMessage() {
  return {
    createMessage: ElMessage
  };
}

/**
 * 删除请求参数为空的数据
 *
 * @param queryParams get 请求参数
 * @returns
 */
export function useClearParams(queryParams: Indexable<string | number>) {
  for (const key in queryParams) {
    if (Object.prototype.hasOwnProperty.call(queryParams, key)) {
      const queryItem = queryParams[key];
      if (typeof queryItem === "string" && queryItem === "") {
        delete queryParams[key];
      }
    }
  }
  return queryParams;
}

/**
 * 获取列表数据
 *
 * @param tableRefs
 * @param searchForm
 * @returns
 */
export function useTableDataCommon(tableRefs: any, searchForm: Iobj) {
  const tableData = ref<Iobj[]>([]);
  tableRefs.loadTableData(searchForm).then((res: any) => {
    const { content } = res;
    const freezeData = Object.freeze(content);
    for (let i = 0; i < freezeData.length; i++) {
      tableData.value.push(freezeData[i]);
    }
  });
  return tableData.value;
}
