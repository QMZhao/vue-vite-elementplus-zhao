import { App, Component } from "vue";

import { ElAvatar, ElButton, ElDatePicker, ElForm, ElFormItem, ElInput, ElLoading } from "element-plus";

const components = [ElButton, ElAvatar, ElDatePicker, ElForm, ElFormItem, ElInput];

const plugins = [ElLoading];

export function registerGlobComponent(app: App) {
  components.map((componentItem: Component) => {
    app.component(componentItem.name ?? "", componentItem);
  });
  plugins.map((item) => {
    app.use(item);
  });
}
