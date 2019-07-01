# Tips
## vuexのステート情報はリロードすると消えるので、vuexのステート情報を保持したい場合には  
vuex-persistedstateなどを組み込んでWebStorageに保存する必要がある。

## offlineでデータを蓄積しておき、onlineでDBへ保存したい
https://qiita.com/horo/items/28bc624b8a26ffa09621
Background Sync(Chrome 49から利用可能)というのをつかうといいらしい（iOS未対応）
Background Syncとはオフライン時に送信しようとしたデータを、  
その後ブラウザが閉じられたとしてもオンラインに復帰した際に自動的に送信することができる機能。

## methodとcomputedの違い
 * computed = データがキャッシュされる
 元データの変更があった時点でデータが保存される
 * method = データがキャッシュされない
 いつでもプログラムを実行して値を計算する

### 何のためにcomputedがあるのか？
高速化と省力化のため。
データが少ない場合は何の問題もないが、何万件のデータをループ処理する場合などはキャッシュがないとユーザービリティに悪影響がでる
Ajaxを使ってサーバーから大量のデータを取得して一覧表示する、などの場合はcomputedのキャッシュを考慮したコードを書いていくべき。

## getterを利用する理由
* ストアを見たときに、ひとめで使用されるステートが判別できる
* コンポーネント側で、すでに計算済みの値として安心して使用できる
* mapGettersに統一できて見易い

## window,documentを利用する場合
process.clientを使う
https://ja.nuxtjs.org/faq/window-document-undefined/
```
if (process.client) {
}
```

## asyncData
コンポーネントのデータをセットする前に非同期の処理を行うためのメソッド。
https://ja.nuxtjs.org/api/#asyncdata-%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89

* サーバーサイドでデータを取得し、それをレンダリングしたい場合に利用できる
* コンポーネント（ページコンポーネントに限ります）がロードされる前に毎回呼び出される
* サーバーサイドレンダリングや、ユーザーがページを遷移する前にも呼び出される。
* このメソッドは第一引数としてcontext（オブジェクト）を受け取り、contextを使ってデータを取得してコンポーネントのデータを返す
* asyncDataメソッド内で、コンポーネントのインスタンスにthisを経由してアクセスできない。  
(asyncDataメソッドはコンポーネントがインスタンス化される前に呼び出されるため)

下記のasyncDataの結果はdata とマージされます。
```
export default {
  data () {
    return { project: 'default' }
  },
  asyncData (context) {
    return { project: 'nuxt' }
  }
}
```






