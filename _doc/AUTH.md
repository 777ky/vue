# Firestore Authを利用する

## nuxt.config.jsにfirebaseのAPIKEYなどを記述する
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

## middlewareを使ってログインしていない場合のリダイレクト設定をする例
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
