https://inside.dmm.com/entry/2018/04/10/nuxt-firebase

JSONをajaxで読み込んで表示する

一番シンプルなサンプル確認（vueのモジュールを読み込んで使う。bable/webpackなどなし）
* http://localhost:3000/simple/index.html

## 調べること
* vuex
状態管理
https://vuex.vuejs.org/ja/guide/actions.html
https://tech.studyplus.co.jp/entry/2019/01/28/094825

* [Nuxt.js](https://ja.nuxtjs.org/guide/)
  * Vue 2
  * Vue-Router
  * Vuex（ストアオプションを利用している場合に限る）
  * Vue Server Renderer（mode: 'spa' を利用している場合を除く）
  * vue-meta

## PWAも簡単？
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

`yarn add '@nuxtjs/onesignal'`


https://simple-it-life.com/2018/09/01/vue/
https://html5experts.jp/potato4d/24346/
```
$ npm install -g vue-cli 
$ vue init nuxt-community/starter-template nuxt_sample
$ cd nuxt_sample
$ yarn
$ yarn dev
```

yarn build
yarn generate
firebase deploy

## vueでsassを使う場合
* `<style scoped lang="scss"></script>`の中にsassを直接記述する
```
<style scoped lang="scss">
.hello {
  &_footer{
    color: #00f
  }
}
</style>
```

* `<style scoped lang="scss"></script>`の中でsassをimportする
```
<style scoped lang="scss">
@import "../styles/master.scss";
</style>
```

* jsの中でimportする
```
<script>
import "../styles/master.scss";
</script>
```