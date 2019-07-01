# アニメーションを使う

## アニメーションを使う理由
* 2つのステータスがあった場合にその間を繋げることでユーザーの認知負荷を軽減させることができる
* ページ遷移しても要素の関連性を保つことができる
* トランジションを効果的に使用することで、ユーザーがWeb上ですばやく情報を収集することができる

## [transition](https://ja.nuxtjs.org/api/pages-transition/)
<transition>コンポーネントを使うと、ページ間を遷移する際のトランジション/アニメーションを行うことができる

## Transition時に付与されるクラス
[Enter/Leave とトランジション一覧](https://jp.vuejs.org/v2/guide/transitions.html#%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%AF%E3%83%A9%E3%82%B9)
* 要素が表示されるとき
v-enter → v-enter-active → v-enter-to
* 要素が非表示されるとき
v-leave → v-leave-active → v-leave-to

## nuxt.jsを利用している場合は下記のクラスが付与される
[transition プロパティについて](https://ja.nuxtjs.org/api/configuration-transition/)

### class名でつける場合
`<transition class="xxx">...</transition>`
* enter-xxx：コンテンツが入ってくる時
* enter-active-xxx：コンテンツがactiveの時
* enter-to-xxx：コンテンツが出ていく時
* leave-xxx
* leave-active-xxx
* leave-to-xxx

### nameから勝手にやってくれるやつ
`<transition class="xxx">...</transition>`
* xxx-enter
* xxx-enter-active
* xxx-enter-to
* xxx-leave
* xxx-leave-active
* xxx-leave-to


# watchQuery
* watchQuery キーを設定し、監視するクエリ文字列を設定する。
* 定義した文字列に変更が生じると、全てのコンポーネントメソッド（asyncData, fetch, validate, layout, ...）が呼ばれる。
* デフォルトは無効
* すべてのクエリ文字列に対して監視を設定したい場合は、watchQuery：true
```
export default {
  watchQuery: true
}
```
または
```
export default {
  watchQuery: ['page','item','pse'],
}
```

