/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-08-16 11:50:24
 * @LastEditTime: 2021-09-03 10:53:37
 * @Reference:
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const Component: DefineComponent<{}, {}, any>;
  export default Component;
}

// import lang from "element-plus/lib/locale/lang/zh-cn";
// import "dayjs/locale/zh-cn";
// import locale from "element-plus/lib/locale";

// declare module 'element-plus/lib/locale/locale/*' {
//   import  {setLocale}  from 'element-plus/lib/locale';
//   const locale: Locale & ReadonlyRecordable;
//   export default locale as Locale & ReadonlyRecordable;
// }

declare module "dayjs";

declare let AMap: any;

declare module "virtual:*" {
  const result: any;
  export default result;
}
