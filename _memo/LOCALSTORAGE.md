# localstorageを利用する

* localstorageにデータ保存して再度立ち上げ直すとデータがあるか確認
https://qiita.com/sakapun/items/a0cf5698751ae70c8088
https://b.0218.jp/20180216115001.html
https://note.chatbox-inc.com/post/tec/nuxtjs/vuex-persistedstate/
https://pizzamanz.net/web/vue/vuex-persistedstate/
https://qiita.com/sunecosuri/items/3544fb101cabd310acc3
→vuex-persistedstateというのを使うといいらしい
→ssrモードで使えない（windowがないため）

* nuxt-client-init-module
https://github.com/potato4d/nuxt-client-init-module
https://qiita.com/potato4d/items/cc5d8ea24949e86f8a5b
https://qiita.com/sunecosuri/items/3544fb101cabd310acc3


## 追加方法
// window.localstorageを利用するために
// nuxtClientInitを使うためのプラグイン
``` [src/nuxt-client-init]
export default async (ctx) => {
  console.log('ssssssssss');
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
```

``` [src/nuxt.config.js]
plugins:[
    {
      src: '@/plugins/nuxt-client-init',
      ssr: false
    },
  ]
```
### 使い方

actionにnuxtClientInitを追加し、stateにlocalStorageを入れておく。
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
stateのlocalStoragオブジェクトを利用できる。
```
this.localStorage.setItem("samplekey",'sample');
```
