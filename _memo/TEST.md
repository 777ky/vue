# jestでtestする

https://qiita.com/akihiro-iwata/items/baceebd00b6973d67456

↓モジュールの記述などが古くなってしまったぽいけど、
テスト内容が勉強になる
https://qiita.com/rhistoba/items/6e90e2c51e8ad1875ac0#jest%E3%81%AB%E3%82%88%E3%82%8B%E3%83%86%E3%82%B9%E3%83%88

```
$ yarn add --dev jest @vue/test-utils babel-jest vue-jest jest-serializer-vue babel-preset-env babel-polyfill syntax-object-rest-spread
```
* @vue/test-utils
* babel-jest (for ES2015+ features in tests)
* vue-jest (for handling *.vue files in tests)
* jest-serializer-vue(for snapshot tests)
* babel-preset-env
* babel-polyfill(asyncのテストに必要)
* syntax-object-rest-spread(...spreadを利用するため)

* shallowMountとmountの違い
https://qiita.com/ykhirao/items/8e8a9547a693c677813c
* mount は子コンポーネントの html をマウントしてくれる
* shallowMount は子コンポーネントの html をマウントしない
* shallowMount + stubs は子コンポーネントの html をstubでマウントできる
* TodoContainer.methods でメソッドだけのテストは意外に便利

https://qiita.com/_P0cChi_/items/41a0b84da924718f7c05

https://tech.fusic.co.jp/web/vue-component-testing-with-vuex/

