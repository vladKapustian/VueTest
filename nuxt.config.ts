// https://nuxt.com/docs/api/configuration/nuxt-config
import { NuxtConfig } from "nuxt/schema";
import { resolve } from "path";

interface MyNuxtConfig extends NuxtConfig {
  googleFonts?: {
    families: {
      [key: string]: boolean | { [key: string]: any };
    };
  };
}

const config: MyNuxtConfig = {
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["assets/main.css"],
  modules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Inter: true,
    },
  },
};

export default config;
