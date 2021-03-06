# vue.jsとは？
* UIを構築するためのJavaScriptフレームワーク
* MVVM（Model、View、 ViewModel）を採用
* 双方向バインディングのため画面に入力をすればすぐデータにも反映される

# [Nuxt.jsとは？](https://ja.nuxtjs.org/guide/)
Nuxt.jsはVueアプリケーションを作成するフレームワーク

# Nuxt.jsに梱包されているもの
 * Vue 2
 * Vue-Router
 * Vuex（状態管理ライブラリ。ストアオプションを利用している場合に限る）
 * Vue Server Renderer（mode: 'spa' を利用している場合を除く）
 * vue-meta

## Nuxt.jsのプロジェクトを作成する
例）プロジェクト名：nuxt_sample
```
$ npm install -g vue-cli 
$ vue init nuxt-community/starter-template nuxt_sample
もしくは
$ npx create-nuxt-app your-title
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

## reactとvueをちょっとだけ触ってみての感想
* Reactは利用者が「開発者」であることを想定
* Vueは利用者が「ユーザー」であることを想定  
上記の通り、HTML&CSSをメインとする私にとってはvueでアプリケーションを作成する方がreactよりずっと楽だった。
簡単なアプリケーションではvueとReactとの差をあまり感じないが、
vueはDOMに簡単にアクセスできたり自由度が高い分、大規模開発には向いていなそうだと感じた。

[参考](https://qiita.com/yoichiwo7/items/236b6535695ea67b4fbe)

## その他のまとめ
* [nuxtの各ディレクトリについての説明](_doc/NUXT.md)
* [CSS記述方法](_doc/CSS.md)
* [Firestore Authを利用する](_doc/AUTH.md)
* [@nuxtjs/pwaを利用する](_doc/PWA.md)
* [firebaseにdeployする](_doc/FIREBASE_FUNCTIONS.md)
* [localstorageを利用する](_doc/LOCALSTORAGE.md)
* [jestでtestする](_doc/TEST.md)
* [storybookでコンポーネントを管理する](_doc/STORYBOOK.md)
* [アニメーションを使う](_doc/ANIMATION.md)
* [Tips](_doc/TIPS.md)

