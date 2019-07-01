# MEMO
## TODO
* アカウント削除機能
* リマインド機能
* シェア機能

* 画像について
https://developer.android.com/guide/practices/screens_support.html#sizes
https://developer.android.com/training/multiscreen/screendensities.html#TaskProvideAltBmp

* アニメーション
https://backyard.imjp.co.jp/articles/web_animation3

* svgアニメーション
https://old-pine.net/css/svgcssjs%E3%81%A7%E6%99%82%E9%96%93%E8%A1%A8%E7%A4%BA%E5%8B%95%E7%94%BB%E3%83%91%E3%82%A4%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95
https://goworkship.com/magazine/particle-animation/
http://blog.project-nya.jp/1758

* createjs
npm i @createjs/easeljs @createjs/tweenjs
https://ics.media/tutorial-createjs/
https://ics.media/entry/1291/

* ブラウザバック
<v-btn @click="$router.go(-1)">back</v-btn>



    // this.$firebaseApp.auth().getRedirectResult().then((result)=>{
    //   console.log(result.credential);
    // })

    const credential = this.$firebaseApp.auth().getRedirectResult().then((result)=>{
      return result.credential
    })
    console.log(credential);



https://teratail.com/questions/183242

ログイン時にcredentialを取得するっぽい？
https://stackoverflow.com/questions/55577597/firebase-googleauthprovider-in-react-native


    // console.log(user.authentication )
    // this.$firebaseAuth().signInWithRedirect(this.$provider).then(result=>{
    //   console.log(result)
    // })

    // let credential  = this.$provider.credential(
    //   this.accessToken,
    //   this.idToken
    //       // this.currentUser.email,
    //       // this.current_password,
    // )
