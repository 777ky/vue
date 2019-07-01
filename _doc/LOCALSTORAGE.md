# localstorageを利用する

## ログイン情報をlocalstorageに入れて永続化したい場合
vuex-persistedstateというのを使うといいらしいがssrモードでは使えない（windowがないため）
[uex-persistedstateでログイン認証の永続化](https://www.webopixel.net/javascript/1463.html)


## window.localstorageを利用するためにクライアントサイド限定の初期化処理を追加する
[nuxt-client-init-module](https://github.com/potato4d/nuxt-client-init-module)を利用する
[nuxt-client-init-module を使って Nuxt.js にクライアントサイド限定の初期化処理を追加する](https://qiita.com/potato4d/items/cc5d8ea24949e86f8a5b)

`$ yarn add nuxt-client-init-module`

``` [src/nuxt.config.js]
plugins:[
    {
      src: '@/plugins/nuxt-client-init',
      ssr: false
    },
  ]
```

``` [src/plugins/nuxt-client-init.js]
export default async (ctx) => {
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
```

### 使い方
actionにnuxtClientInitを追加し、stateにlocalStorageを入れておく
``` [src/store/index.js]
export const mutations = {
  initLocalStorage(state, payload){
    state.localStorage = payload;
  }
}
export const actions = {
    nuxtClientInit ({ commit, state, dispatch }, { req }) {
    // ローカルストレージオブジェクトをセット
    commit('initLocalStorage', localStorage)
  }
}
```
stateのlocalStoragオブジェクトを利用できる
```
this.localStorage.setItem("samplekey",'sample');
```
