# vueでsassを使うには

styleタグにscoped 属性を付けると、現在のコンポーネントにのみスタイルを適用できる

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

