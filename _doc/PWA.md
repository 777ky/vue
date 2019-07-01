# @nuxtjs/pwaを利用する

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

[onesignal](https://onesignal.com/)を利用したpush通知
→コンソールにエラー出るので一旦ストップ
`yarn add '@nuxtjs/onesignal'`


