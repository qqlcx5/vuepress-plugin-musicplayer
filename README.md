# vuepress-plugin-musicplayer

## Introduce

musicplayer plugin for vuepress theme.

是一款基于网易云API和`zw-player`播放器，对一部分样式和功能作调整，如果后续API失效没有及时调整可以自己传入API地址。

## How to use

1. install `npm i vuepress-plugin-musicplayer -S`

2. add in `config.js`

```js
module.exports = {
  
  plugins: [
    ['vuepress-plugin-musicplayer', {
      showAllRank: true, // 默认 false
      baseUrl: 'https://netease-cloud-music-api-qqlcx5.vercel.app/', // 默认
    }],
  ]
}
```
-  `showAllRank` 展示所有排名歌单，默认 `false`
-  `baseUrl` 网易云API

## Tip

- This plugin supports `vuepress 1.x`

## contact

**微信**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/wechat.jpeg)

**前端有道公众号**

![wechat](https://cdn.jsdelivr.net/gh/qqlcx5/figure-bed@v1.0.0/image/public.jpg)
