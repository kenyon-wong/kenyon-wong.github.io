---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: MyBlogs
titleTemplate: wiki

hero:
  name: "MyBlogs"
  text: "wki"
  tagline: 
  actions:
    - theme: brand
      text: 开始使用
      link: /about/
  image:
    src: https://ckcsec.oss-cn-hangzhou.aliyuncs.com/img/vitepress-logo-large.webp
    alt: VitePress

features:
  - icon: 
    title: 开源
    details: 每个人都可以自由搭建
  - icon: 📝 
    title: 共享
    details: 任何人都可以一起补充文库，欢迎你的来到
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
