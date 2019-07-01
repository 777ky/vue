# CSS記述方法
vueファイルに<style></style>でCSSを記述できる。
```
<style>
.hello {
  color: #00f
}
</style>
```

## 記述したファイルのコンポーネントにのみスタイルを適用できる場合
styleタグにscoped属性を付ける
```
<style scoped>
.hello {
  color: #00f
}
</style>
```

## sassで記述したい場合
lang属性にscssを付ける
```
<style lang="scss">
@import "../styles/master.scss";
.hello {
  &_footer{
    color: #00f
  }
}
</style>
```

## jsの中でcssファイルをimportする場合
```
<script>
import "../styles/master.scss";
</script>
```

