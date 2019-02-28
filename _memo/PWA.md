# PWAを利用する
https://techblog.scouter.co.jp/entry/2017/12/07/080416
https://qiita.com/ta-ke-no-bu/items/0db1c20e9b48c4f2c752
yarnを利用した場合、途中でnpmを使うと動かなくなるときがある。
`yarn add '@nuxtjs/pwa'`

```nuxt.config.js
  /* for PWA */
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    name: 'nuxt-start',
    lang: 'ja',
    short_name: 'nuxt',
    title: 'nuxt-startです',
    'og:title': 'nuxt-startです',
    description: 'nuxt-startです',
    'og:description': 'nuxt-startです',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true, //開発環境でもPWA
  }
```
[onesignal](https://onesignal.com/)
を利用したpush通知
→コンソールにエラー出るから一旦ストップしている
`yarn add '@nuxtjs/onesignal'`


