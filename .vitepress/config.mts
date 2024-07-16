import { defineConfig } from 'vitepress'

import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kenyon's VitePress Site",
  description: "互联网数字垃圾回收专用废纸篓",
  srcDir: '.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs' },
      { text: 'Docs', link: '/docs' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kenyon-wong/kenyon-wong.github.io.git' }
    ]
  },
  vite: {
    plugins: [
      AutoSidebar({
        path: '.',
        collapsed: false,
        ignoreList: ['.obsidian', '.git', 'node_modules']
      })
    ]
  }
})
