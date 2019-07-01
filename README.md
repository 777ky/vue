# Nuxt.jsプロジェクトを作成する
[Nuxt.js](https://ja.nuxtjs.org/guide/)には下記のものがパッケージされている  
 * Vue 2
 * Vue-Router
 * Vuex（ストアオプションを利用している場合に限る）
 * Vue Server Renderer（mode: 'spa' を利用している場合を除く）
 * vue-meta

## Nuxt.jsのプロジェクトを作る
例）プロジェクト名：nuxt_sample
```
$ npm install -g vue-cli 
$ vue init nuxt-community/starter-template nuxt_sample
$ cd nuxt_sample
$ yarn install
```

## localhost:3000でホットリロードで立ち上げる場合
```
$ yarn dev
```

## 本番用にビルドする場合
```
$ yarn build
$ yarn start
```

## 静的ファイルを作成する場合
```
$ yarn generate
```

## toc
* [nuxtの各ディレクトリについての説明](_doc/NUXT.md)
* [CSS記述方法](_doc/CSS.md)
* [Firestore Authを利用する](_doc/AUTH.md)
* [@nuxtjs/pwaを利用する](_doc/PWA.md)
* [firebaseにdeployする](_doc/FIREBASE FUNCTION.md)
* [localstorageを利用する](_doc/LOCALSTORAGE.md)
* [jestでtestする](_doc/TEST.md)
* [storybookでコンポーネントを管理する](_doc/STORYBOOK.md)
* [アニメーションを使う](_doc/ANIMATION.md)
* [Tips](_doc/TIPS.md)