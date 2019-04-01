# ANIMATION
## アニメーションについて
https://qiita.com/soichiro_nitta/items/8d8ce14fc287aa233a

### アニメーションを使う理由
https://css-tricks.com/native-like-animations-for-page-transitions-on-the-web/
https://coliss.com/articles/build-websites/operation/javascript/native-like-animations-for-page-transitions.html

### transition
https://ja.nuxtjs.org/api/pages-transition/

* v-enter：enterの開始状態要素が挿入される前に追加され、要素が挿入された後に1フレーム削除されます。

* v-enter-active：enterのアクティブ状態。参加フェーズ全体に適用されます。要素が挿入される前に追加され、遷移/アニメーションが終了したときに削除されます。このクラスを使用して、入力トランジションのデュレーション、ディレイ、イージングカーブを定義できます。

* v-enter-to：enterの終了状態要素が挿入された後に1つのフレームを追加し（同時にv-enterが削除されます）、トランジション/アニメーションが終了したときに削除されます。

* v-leave：休暇の開始状態です。 1フレーム後に削除遷移がトリガーされたときにすぐに追加されます。

* v-leave-active：アクティブな脱退状態。退職フェーズ全体に適用されます。 Leaveトランジションがトリガーされたときにすぐに追加され、トランジション/アニメーションが終了したときに削除されます。このクラスは、離脱遷移の持続時間、遅延および緩和曲線を定義するために使用できます。

* v-leave-to：休暇の終了状態です。トランジション/アニメーションが終了したときに削除されます。

## effect
https://tympanus.net/Development/Animocons/

https://codepen.io/eltonmesquita/pen/gmJdKP

https://backyard.imjp.co.jp/articles/web_animation3
https://ics.media/entry/1291/
https://qiita.com/ruby_kumagoro/items/276cad77c78b39c09201
https://liginc.co.jp/442913
https://goworkship.com/magazine/particle-animation/
http://blog.project-nya.jp/1758

https://ics.media/tutorial-createjs/basic/
https://ics.media/tutorial-createjs/

npm i @createjs/easeljs @createjs/tweenjs
https://note.mu/in_colors_net/n/n1a9bc57fe15d

https://teratail.com/questions/57822

http://utweb.jp/blog/archives/2813

## transition
watchQuery?

## transition
watchQuery?

## nuxt.jsで勝手にページ遷移のクラスつけてくれている
https://ja.nuxtjs.org/api/configuration-transition/

// class名でつける場合
// enter-class：コンテンツが入ってくる時
// enter-active-class：コンテンツがactiveの時
// enter-to-class：コンテンツが出ていく時
// leave-class
// leave-active-class
// leave-to-class

// nameから勝手にやってくれるやつ
// xxx-enter
// xxx-enter-active
// xxx-enter-to
// xxx-leave
// xxx-leave-active
// xxx-leave-to

<div class="isActive">
<div class="isDefault">

## svgアニメーション
https://liginc.co.jp/web/html-css/html/154217
https://qiita.com/megurock/items/d520c89c12e07387a0f3
https://dashgraph.me/webdesign/svg-typography-animation/


  // key: to => to.fullPath,
  // transition(to, from) {
  //   if (!from) return 'slide-left'
  //   return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  // },

# 参考
https://b-risk.jp/blog/2016/02/android_design/
https://developer.android.com/guide/practices/screens_support.html#sizes

# watchQuery
watchQuery キーを設定し、監視するクエリ文字列を設定します。定義した文字列に変更が生じると、全てのコンポーネントメソッド（asyncData, fetch, validate, layout, ...）が呼ばれます。パフォーマンス向上のため、監視はデフォルトで無効になっています。

すべてのクエリ文字列に対して監視を設定したい場合は、watchQuery：true を設定してください。


