# jestでtestする

```
$ yarn add --dev jest @vue/test-utils babel-jest vue-jest jest-serializer-vue babel-preset-env babel-polyfill syntax-object-rest-spread
```
* @vue/test-utils
* babel-jest (ES2015+でテストするために必要)
* vue-jest (*.vueファイルをテストするために必要)
* jest-serializer-vue (snapshotのテストに必要)
* babel-preset-env
* babel-polyfill (asyncのテストに必要)
* syntax-object-rest-spread (...spreadを利用するために必要)

## shallowMountとmountの違い
[vue-test-utilsのshallowmountとmountの違いについて](https://qiita.com/ykhirao/items/8e8a9547a693c677813c)
* mount は子コンポーネントの html をマウントしてくれる
* shallowMount は子コンポーネントの html をマウントしない
* shallowMount + stubs は子コンポーネントの html をstubでマウントできる
* TodoContainer.methods でメソッドだけのテストは意外に便利

## 参考リンク
* [jestによるテスト](https://qiita.com/rhistoba/items/6e90e2c51e8ad1875ac0#jest%E3%81%AB%E3%82%88%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88)
モジュールの記述などが古くなってしまったぽいけど、テスト内容が勉強になる
* [jestを活用したNuxt.jsのコンポーネントのテスト](https://qiita.com/akihiro-iwata/items/baceebd00b6973d67456)
* [vue-test-utilsでvuexモジュールのテストを書く](https://qiita.com/_P0cChi_/items/41a0b84da924718f7c05)
* [Vuexが絡んだVueコンポーネントのテスト](https://tech.fusic.co.jp/web/vue-component-testing-with-vuex/)

