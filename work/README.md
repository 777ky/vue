## 調べること
* vuex
状態管理
https://vuex.vuejs.org/ja/guide/actions.html
https://tech.studyplus.co.jp/entry/2019/01/28/094825

* Nuxt.js
https://simple-it-life.com/2018/09/01/vue/
https://html5experts.jp/potato4d/24346/
```
$ npm install -g vue-cli 
$ vue init nuxt-community/starter-template nuxt_sample
$ cd nuxt_sample
$ yarn
$ yarn dev
```

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