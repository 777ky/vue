# Firestore Authを利用する
* auth

## nuxt.config.jsでfirebaseのAPIKEYなどをセットする

``` [nuxt.config.js]
  build: {
    extend (config, { isDev, isClient }) {
      config.plugins.push(
        new webpack.EnvironmentPlugin({
          APIKEY:'xxxxxxxxxxxxxxxxxxxxxxxxx',
          AUTHDOMAIN:'xxxxxx.firebaseapp.com',
          DATABASEURL:'https://xxxxxx.firebaseio.com',
          PROJECTID:'xxxxxx',
          STORAGEBUCKET:'xxxxxx.appspot.com',
          MESSAGINGSENDERID:'1234567890'
        })
      )
    }
  },
```

## firebaseのプラグインを作成する
``` [plugins/firebase.js]
import firebase from 'firebase/app';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
  })
}
export default firebase
```

## ログインしていない場合のリダイレクト設定
``` [middleware/authenticated.js]
export default ({ store, route, redirect })=> {
  if (!store.getters.isAuthenticated && route.name === 'auth') {
    //ログインしてない場合はログイン画面へリダイレクト
    redirect('/auth/login')
  }
}
```
middlewareの設定
``` [nuxt.config.js]
router: {
    middleware: 'authenticated'
}
```
component側のmiddleware設定
```
middleware: [
  'authenticated',
],
```

* 永続化について
https://firebase.google.com/docs/auth/web/auth-state-persistence?hl=ja



* authコンポーネントを作る
getRedirectResult() でリダイレクト系処理の結果の取得、onAuthStateChanged() で認証状態変更の待ち受けを行うことになります。
→authプラグインとしてPromiseにする


* signInWithRedirect()から戻ってくると値が入ってくる
```
firebase.auth().getRedirectResult().then((authData)=>
{
  console.log(authData.user);
})
```



