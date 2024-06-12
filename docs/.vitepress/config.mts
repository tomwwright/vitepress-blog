import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Blog",
  description: "A VitePress Site",
  cleanUrls: true,
  themeConfig: {
    // footer: {
    //   message: "Released under the MIT License.",
    //   copyright: "Copyright © 2019-present Evan You",
    // },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Examples", link: "/markdown-examples" },
    // ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    docFooter: {
      prev: false,
      next: false,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "linkedin", link: "https://linkedin.com/in/tomwwright" },
    ],
  },
});
