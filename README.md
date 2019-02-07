## TODO
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
