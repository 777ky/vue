# MEMO
## TODO
* アカウント削除機能
* リマインド機能
* シェア機能


## getter書き方サンプル
```
testDate: state=>{
  return Object.keys(state.challengeState).map(value => {
    console.log(state.challengeState[value])
    return state.challengeState[value]
  })
},
friendsName: state => {
  return state.friends.map(friend => {
    return friend.name
  })
},
```

https://rakuishi.com/archives/vuejs-nuxtjs/