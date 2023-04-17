import { defineNuxtPlugin } from "#app";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1234567_abcd1234.js",
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("IconFont", IconFont);
  nuxtApp.vueApp.use(Antd);
});
