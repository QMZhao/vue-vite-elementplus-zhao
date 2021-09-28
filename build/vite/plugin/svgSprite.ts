/*
 * @Autor: QMZhao
 * @Date: 2021-08-18 13:10:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-17 17:42:34
 * @Description:
 * @FilePath: /vite-admin-template/build/vite/plugin/svgSprite.ts
 */
/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import SvgIconsPlugin from "vite-plugin-svg-icons";
import path from "path";

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = SvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
    svgoOptions: isBuild,
    // default
    symbolId: "icon-[dir]-[name]"
  });
  return svgIconsPlugin;
}
