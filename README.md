# Nuxt.jsプロジェクトを作成する
[Nuxt.js](https://ja.nuxtjs.org/guide/)には下記のものがパッケージされている
 * Vue 2
 * Vue-Router
 * Vuex（ストアオプションを利用している場合に限る）
 * Vue Server Renderer（mode: 'spa' を利用している場合を除く）
 * vue-meta

## Nuxt.jsのプロジェクトを作って立ち上げる
```
$ npm install -g vue-cli 
$ vue init nuxt-community/starter-template nuxt_sample
$ cd nuxt_sample
$ yarn install
```

# serve with hot reload at localhost:3000
```
$ yarn dev
```

# build for production and launch server
```
$ yarn build
$ yarn start
```

# generate static project
```
$ yarn generate
```

## firebaseにdeploy
```
$ firebase deploy
```

``` [.firebaserc]
{
  "projects": {
    "default": "vue-labs"
  }
}
```





* functionsのエラー
warning "firebase-admin > @firebase/database@0.3.16" has unmet peer dependency "@firebase/app-types@0.x".
warning "firebase-admin > @firebase/database > @firebase/database-types@0.3.8" has unmet peer dependency "@firebase/app-types@0.x".