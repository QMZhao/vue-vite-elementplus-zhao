/*
 * @Author: QMZhao
 * @Description:
 * @Date: 2021-08-16 11:27:54
 * @LastEditTime: 2021-09-22 22:54:40
 * @Reference:
 */
import type { Plugin } from "vite";

import vue from "@vitejs/plugin-vue";
// import VitePluginElementPlus from "vite-plugin-element-plus";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { configCompressPlugin } from "./compress";

import { configSvgIconsPlugin } from "./svgSprite";

export function createVitePlugins(mode: string, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // have to
    vue(),
    // have to
    // vueJsx(),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ];

  // TODO
  // !isBuild && vitePlugins.push(configHmrPlugin());

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin(isBuild && "gzip", isBuild));
  }
  return vitePlugins;
}
