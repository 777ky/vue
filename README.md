## TODO
* storybook
https://qiita.com/SotaSuzuki/items/b20167ee811aa3bd29df
* jestそろそろ
https://qiita.com/akihiro-iwata/items/baceebd00b6973d67456

↓モジュールの記述などが古くなってしまったぽいけど、
テスト内容が勉強になる
https://qiita.com/rhistoba/items/6e90e2c51e8ad1875ac0#jest%E3%81%AB%E3%82%88%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88

https://github.com/vuejs/vue-test-utils-jest-example


```
$ yarn add --dev jest @vue/test-utils babel-jest vue-jest jest-serializer-vue babel-preset-env

$ yarn add --dev babel-polyfill
$ yarn add --dev syntax-object-rest-spread

jest
@vue/test-utils
babel-jest (for ES2015+ features in tests)
vue-jest (for handling *.vue files in tests)
jest-serializer-vue(for snapshot tests)
babel-preset-env
```
https://vue-test-utils.vuejs.org/ja/guides/getting-started.html

* shallowMountとmountの違い
https://qiita.com/ykhirao/items/8e8a9547a693c677813c
* mount は子コンポーネントの html をマウントしてくれる
* shallowMount は子コンポーネントの html をマウントしない
* shallowMount + stubs は子コンポーネントの html をstubでマウントできる
* TodoContainer.methods でメソッドだけのテストは意外に便利

https://qiita.com/_P0cChi_/items/41a0b84da924718f7c05

lodash
https://techblog.kayac.com/2017-12-2_lodash
ユーティリティー（なんか便利）関数を集めたやつ
めっちゃかるい

* firestoreからコレクションを取得できることを確認

* localstrageにデータ保存して再度立ち上げ直すとデータがあるか確認
https://qiita.com/sakapun/items/a0cf5698751ae70c8088
https://b.0218.jp/20180216115001.html
https://note.chatbox-inc.com/post/tec/nuxtjs/vuex-persistedstate/
https://pizzamanz.net/web/vue/vuex-persistedstate/
https://qiita.com/sunecosuri/items/3544fb101cabd310acc3
→vuex-persistedstateというのを使うといいらしい
→ssrモードで使えない（windowがないため）

* nuxt-client-init-module
https://github.com/potato4d/nuxt-client-init-module

* offlineでデータを蓄積しておき、onlineでDBへ保存したい
https://qiita.com/horo/items/28bc624b8a26ffa09621
→Background Syncというのをつかうといいらしい（iOS未対応）

* auth
http://www.sky-limit-future.com/entry/nuxtjs_firebase_authentication
https://inside.dmm.com/entry/2018/04/10/nuxt-firebase

 * 永続化について
 https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=ja

## 一番シンプルなサンプル確認（vueのモジュールを読み込んで使う。bable/webpackなどなし）
* http://localhost:3000/simple/index.html

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
→コンソールにエラー出るから一旦ストップしている
`yarn add '@nuxtjs/onesignal'`

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

* awaitサンプル
```
await new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged(
    (user) => {
      this.setUser(user)
      this.$router.push('/auth/')
      resolve(user)
    }
  )
})
```

* authコンポーネントを作る
```
[1-1]
accessToken情報をlocalstorageから取得、
accessToken情報がない場合は[1-1]
accessToken情報がある場合は[1-3]
---------
[login]
---------
　↓
[1-2]
redirectの中でloginを呼び出し
user情報取得中はspinner表示
---------
Loading...
---------
　↓
[1-3]
user情報をlocalstorageへ格納する
---------
user.name
[logout]
---------
```
  // getRedirectResult() でリダイレクト系処理の結果の取得、onAuthStateChanged() で認証状態変更の待ち受けを行うことになります。

* onAuthStateChanged
 * signOutではイベント発生しない

// return new Promise((resolve, reject) => {
//   firebase.auth().signInWithRedirect(googleProvider)
//     .then(() => {
//       //signInWithRedirectは呼ばれたところに戻るだけっぽい
//       resolve()
//     })
//     .catch((err) => {
//       reject(err)
//     })
// })


    // (async()=>{
    //   await new Promise((resolve, reject) => {
    //     firebase.auth().getRedirectResult().then(
    //       result=>{
    //         // ログアウトしても値がのこっている？
    //         // ログアウト完了する前なので値があるのか・・・
    //         console.log('result')

    //         if(!result.credential){
    //         }else {
    //           // this.setLocalStorage(result.credential)
    //           // console.log('result')
    //           // this.setUser(result.user)
    //           // this.$router.push('/login/')
    //         }
    //         resolve()
    //       }
    //     ).catch(err=>{
    //       console.log(err)
    //       reject(err)
    //     })
    //   })
    // })()

    async test(){
        return new Promise((resolve, reject) => {
          firebase.auth().getRedirectResult().then(
            result=>{

              console.log('result')
              resolve()
            }
          ).catch(err=>{
            console.log(err)
            reject(err)
          })
        })

    },
    // firebase.auth().onAuthStateChanged(
    // (result) => {
    //     if(!result){
    //       // const googleProvider = new firebase.auth.GoogleAuthProvider()
    //       // firebase.auth().signInWithRedirect(googleProvider)
    //     }else {
    //       // this.setUser(result.user)
    //       // this.$router.push('/login/')
    //     }
    // });
