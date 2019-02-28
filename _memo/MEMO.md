## TODO
* firestoreからコレクションを取得できることを確認

* offlineでデータを蓄積しておき、onlineでDBへ保存したい
https://qiita.com/horo/items/28bc624b8a26ffa09621
→Background Syncというのをつかうといいらしい（iOS未対応）


* awaitサンプル
```
await new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged(
    (user) => {
      this.setUser(user)
      this.$router.push('/auth/')
      resolve(user)
    }
  )
})
```

* ライフサイクル
https://jp.vuejs.org/v2/api/index.html#%E3%82%AA%E3%83%97%E3%82%B7%E3%83%A7%E3%83%B3-%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%95%E3%83%83%E3%82%AF

```
beforeCreate(){},
created(){},
beforeMount(){},
mounted(){},
beforeUpdate(){},
updated(){},
activated(){},
deactivated(){},
beforeDestroy(){},
destroyed(){},
errorCaptured(){},
```

* 分岐
```
<div v-if="!isAuthenticated">
  <button @click="doLogin">login</button>
</div>
<div v-if="isAuthenticated">
  <button @click="doLogout">logout</button>
</div>
```
