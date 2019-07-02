export const strict = false

export const state = () => ({
  routeName:'index',
  routeQuery:{},
  // 疑似ページ表示フラグ用
  isPseudo:false,
  // データ取得完了フラグ用
  isLoaded: false,
  // ユーザ情報格納用
  user:null,
  // 何日目格納用
  termDate:0,
  // カレンダーでpickした日付格納用
  pickDate:null,
  // チャレンジリスト格納用
  challenge: null,
  // チャレンジスタート日
  startDate:null,
  // チャレンジスタート日がセットされているか
  isSetting:false,
  // createjs
  cjs:{},
  window: null,
  // ローカルストレージ格納用
  // plankでは利用していないがサンプルとして
  localStorage: null,
})

// Object.keys(myObject).map(function(value, index) {
//   myObject[value] *= 2;
// });
export const getters = {
  routeName: state => state.routeName,
  routeQuery: state => state.routeQuery,
  isPseudo: state => state.routeQuery.pse,
  isLoaded: state => state.isLoaded,
  user: state => state.user,
  challengeState: state => state.challengeState,

  termDate: state => state.termDate,
  startDate: state => state.startDate,
  pickDate: state => state.pickDate,
  isSetting: state => state.isSetting,

  challenge: state => state.challenge,
  // ミドルウェアで利用している
  isAuthenticated: state => !!state.user,
  window: state => state.window,

  cjs: state => state.cjs,
}

export const mutations = {
  updatePage(state, payload) {
    state.routeName = payload.name
    state.routeQuery = payload.query
  },
  setIsLoaded(state, payload){
    state.isLoaded = !!payload
  },
  setUser(state, payload){
    state.user = payload
  },
  // 未実装
  clearCredential(state, payload) {
    state.user = payload
  },
  setTermDate(state, payload){
    state.termDate = payload
  },
  setPickDate(state, payload){
    state.pickDate = payload
  },
  setIsSetting(state, payload){
    state.isSetting = payload
  },
  setChallenge(state, payload){
    state.challenge = payload
  },
  setChallengeState(state,payload){
    state.startDate = payload.date.toDate()
    state.isSetting = payload.isSetting
  },
  initLocalStorage(state, payload){
    state.localStorage = payload
  },
  initWindow(state,payload){
    state.window = payload
  },
  setCreateJs(state,payload){
    state.cjs = payload
  }
}

export const actions = {

  setTermDate({ commit },startDate){
    // start日と今日との差日を求める（86,400,000ミリ秒＝１日）
    const start = new Date(startDate);
    const today = new Date();
    console.log(start)
    const term = Math.floor((today - start) / 86400000)+1
    console.log(term)
    commit('setTermDate', term)

  },

  loadComplete({ commit }) {
    commit('setIsLoaded', true)
  },

  signIn() {
    this.$firebaseAuth().signInWithRedirect(this.$provider)
  },

  signOut({ commit }) {
    return new Promise(resolve => {
      this.$firebaseAuth()
        .signOut()
        .then(() => {
          commit('clearCredential', null)
          resolve()
        })
    })
  },

  reSignIn() {
    this.$firebaseAuth().signInWithRedirect(this.$provider)
  },

  // pickした日付をセットする
  PICK_SELECT_DATE({ commit }, date){
    commit('setPickDate', date)
  },

  // 30日をセットする
  SET_30_DATE({ commit }, {user,name,date}){
    console.log('SET_30_DATE_BATCH_VER')
    const data = require('./'+name+'.json')
    const batch = this.$firebaseStore().batch();

    // batchで日付更新に変更
    // data && Object.keys(data).forEach(key => {
    //   const nestedContent = data[key];
    //   if (typeof nestedContent === "object") {
    //     Object.keys(nestedContent).forEach((docTitle,index) => {

    //       const y = date.getFullYear()
    //       const m = date.getMonth()
    //       const d = date.getDate()+index

    //       const ref = this.$usersRef.doc(user.uid).collection('challenge').doc(key).collection('list').doc(docTitle)

    //       batch.update(ref, {
    //        date:new Date(y,m,d),
    //        check:false
    //       });

    //     });
    //   }
    // });

    data && Object.keys(data).forEach(key => {
      const nestedContent = data[key];

      if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach((docTitle,index) => {

          const y = date.getFullYear()
          const m = date.getMonth()
          const d = date.getDate()+index
          const ref = this.$usersRef.doc(user.uid)

          batch.set(ref, {
            [name]:{
              list:{
                [index+1]:{
                  date:new Date(y,m,d),
                  check:false
                }
              }
            }
          },{merge:true});
        });
      }
    });

    batch.commit().then(()=>{
      console.log('SET_30_DATE_SUCCEED')
    }).catch(error=>{
      console.error("SET_30_DATE_SUCCEED_ERROR: ", error);
    })
  },

  // 30日をセットする
  SET_30_DATE_BK({ commit }, {user,name,date}){
    console.log('SET_30_DATE')
    const data = require('./'+name+'.json')

    data && Object.keys(data).forEach(key => {
      const nestedContent = data[key];
      if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach((docTitle,index) => {

          const y = date.getFullYear()
          const m = date.getMonth()
          const d = date.getDate()+index

          this.$usersRef
            .doc(user.uid)
            .collection('challenge')
            .doc(key)
            .collection('list')
            .doc(docTitle)
            .update({
              date:new Date(y,m,d),
              check:false
            })
            .then((res) => {
              console.log("SET_30_DATE_SUCCEED");
            })
            .catch((error) => {
              console.error("SET_30_DATE_ERROR:", error);
            })
        });
      }
    });

  },

  // 5.チャレンジを登録する
  SET_CHALLENGE({ commit,state,dispatch }, {user,name}) {
      // batchに変更
      console.log('SET_CHALLENGE_BATCH_VER')
      const data = require('./'+name+'.json')
      const date = new Date()
      const batch = this.$firebaseStore().batch();

      data && Object.keys(data).forEach(key => {
        const nestedContent = data[key];

        if (typeof nestedContent === "object") {
          Object.keys(nestedContent).forEach((docTitle,index) => {

            const y = date.getFullYear()
            const m = date.getMonth()
            const d = date.getDate()+index
            const ref = this.$usersRef.doc(user.uid)

            batch.set(ref, {
              [name]:{
                list:{
                  [index+1]:{
                    ...nestedContent[docTitle],
                    date:new Date(y,m,d)
                  }
                }
              }
            },{merge:true});
          });
        }
      });

      batch.commit().then(()=>{
        console.log('SET_CHALLENGE_SUCCEED')
      }).catch(error=>{
        console.error("SET_CHALLENGE_SUCCEED_ERROR: ", error);
      })
  },

  SET_CHALLENGE_BK({ commit,state,dispatch }, {user,name}) {
    const data = require('./'+name+'.json')
    const date = new Date()

    data && Object.keys(data).forEach(key => {
      const nestedContent = data[key];
      if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach((docTitle,index) => {

          this.$usersRef
            .doc(user.uid)
            .collection('challenge')
            .doc(key)
            .collection('list')
            .doc(docTitle)
            .set({
              ...nestedContent[docTitle],
            })
            .then((res) => {
              // 30日をセットする
              dispatch('SET_30_DATE',{
                user,
                name,
                date
              })
              // console.log("SET_CHALLENGE_SUCCEED");
            })
            .catch((error) => {
              console.error("SET_CHALLENGE_SUCCEED_ERROR: ", error);
            })
        });
      }
    });
},

  // 4.チャレンジステイタスをセットする
  SET_CHALLENGE_STATUS({ commit,state,dispatch }, {user,name,date,flag}){
    // TODO:マップ型に変更

    this.$usersRef
      .doc(user.uid)
      .set({
        [name]:{
          date,
          isSetting:flag
        }
      },{merge:true})
      .then(() => {
        // dispatch('setTermDate',date)
        commit('setIsSetting',flag)
        console.log("SET_CHALLENGE_STATUS_SUCCEED");
      })
      .catch((error) => {
        console.error("SET_CHALLENGE_STATUS_ERROR: ", error);
      })
  },

  // BKUP
  SET_CHALLENGE_STATUS_BK({ commit,state,dispatch }, {user,name,date,flag}){

    this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .set({
        date,
        isSetting:flag
      })
      .then(() => {
        // dispatch('setTermDate',date)
        commit('setIsSetting',flag)
        console.log("SET_CHALLENGE_STATUS_SUCCEED");
      })
      .catch((error) => {
        console.error("SET_CHALLENGE_STATUS_ERROR: ", error);
      })
  },

  // スタート日をリセットする
  RESET_CHALLENGE_START_DATE({ commit,state }, {user,name,flag}){

    this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .update({
        isSetting:flag
      })
      .then(() => {
        // TODO: stateのisSettingにもセット？
        commit('setTermDate', 0)
        commit('setPickDate', null)
        console.log("RESET_CHALLENGE_START_DATE_SUCCEED");
      })
      .catch((error) => {
        console.error("RESET_CHALLENGE_START_DATE_ERROR: ", error);
      })
  },

  // 3.ユーザ情報を登録する
  SET_USER({ commit }, user){
    const userData ={
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      icon: user.photoURL
    }
    this.$usersRef.doc(user.uid).set(
      userData
    )
    commit('setUser',userData)
  },

  // 2.ユーザ情報とプランクをDBに登録する
  SET_CREDENTIAL({ commit,dispatch }, user){
    const name = ['plank','pakapaka']

    // ユーザ情報をDBに書き込む
    dispatch('SET_USER',user)

    for(let i in name){
      // チャレンジステイタスをDBに書き込む
      dispatch('SET_CHALLENGE_STATUS', {
        user,
        name:name[i],
        date:new Date(),
        flag:false
      })
      // チャレンジをDB書き込む
      dispatch('SET_CHALLENGE',{
        user,
        name:name[i]
      })
    }
  },

  DELETE_USER({commit,dispatch },credential){
    let user = this.$firebaseAuth().currentUser;

    console.log(credential)

    user.reauthenticateAndRetrieveDataWithCredential(credential).then(()=>{
      user.delete().then(function() {
        console.log('deleted')
      }).catch(function(error) {
        console.log(error)
      });
    }).catch(function(error) {
      console.log(error)
    });


    // TODO:DBがうまく消えてくれない
    // 一括削除がない・・・
    // https://qiita.com/subaru44k/items/a88e638333b8d5cc29f2

    // firestore.collection('messages').getDocuments().then((snapshot) {
    //   for (DocumentSnapshot ds in snapshot.documents){
    //     ds.reference.delete();
    //   });
    // });

    // this.$usersRef.doc(user.uid).delete().then(
    //   ()=>{
    //     console.log("Document successfully deleted!");
    //   }).catch(error=>{
    //     console.error(error)
    //   })


    // TODO:setUserも空に
    commit('setUser',false)
    // this.$router.push('/signin')
    // commit('signOut',false)

  },



  // 1.ユーザ情報を取得する
  async GET_CREDENTIAL({commit,state,dispatch},{user,name}){
    if (!user) return
    const userSnapShot = await this.$usersRef
      .doc(user.uid)
      .get()

    if (userSnapShot.exists) {
      // ログインユーザでユーザ情報がDBにある場合
      commit('setUser', userSnapShot.data())

      // TODO:otameshi
      // dispatch('SET_CREDENTIAL',user)
    }else{
      // ログインユーザでユーザ情報がDBにない場合
      dispatch('SET_CREDENTIAL',user)
    }

  },

  // チャレンジステイタスを取得する
  async GET_CHALLENGE_STATUS({ commit,state }, {user,name}){
    console.log('GET_CHALLENGE_STATUS')
    if (!user) return
    const snapshot = await this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .get()

    if (snapshot.exists){
      // チャレンジステイタス取得
      commit('setChallengeState', snapshot.data())
    }else{
      console.log('チャレンジステイタス取得失敗')
    }

  },

  // チャレンジステイタスを取得する
  LOAD_CHALLENGE_STATUS({ commit,state }, {user,name}){
    console.log('LOAD_CHALLENGE_STATUS')
    if (!user) return
    const unsubscribe = this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .onSnapshot(snapshot => {
        console.log(snapshot.data())
        commit('setChallengeState',snapshot.data())
      }, err => {
        console.log(err)
      });

  },

  LOAD_CHALLENGE({ commit,state }, {user,name}){
    console.log('LOAD_CHALLENGE')
    if (!user) return

    // const unsubscribe2 = this.$usersRef
    //   .doc(user.uid)
    //   .onSnapshot(snapshot => {
    //     const data = [];
    //     console.log(snapshot.data()['plank'].list)
    //     const list = snapshot.data()['plank'].list

    //     const num = 2

    //     this.$usersRef
    //     .doc(user.uid)
    //     .set({
    //       pakapaka:{
    //         [num]:{
    //           check:true
    //         }
    //       }
    //     },{merge:true})

    //     // snapshot.forEach(doc => {
    //     //   data.push({
    //     //     ...doc.data(),
    //     //     date:doc.data().date.toDate()
    //     //   });
    //     //   commit('setChallenge', data)
    //     // });

    //   }, err => {
    //     console.log(err)
    //   });


    const unsubscribe = this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .collection('list')
      .orderBy('day','asc')
      .onSnapshot(snapshot => {
        const data = [];

        snapshot.forEach(doc => {
          data.push({
            ...doc.data(),
            date:doc.data().date.toDate()
          });
          commit('setChallenge', data)
        });

      }, err => {
        console.log(err)
      });
    // onSnapshotを止めるにはunsubscribe()を利用する
    // Stop listening to changes
    // unsubscribe();
  },

  LOAD_CHALLENGE_BK({ commit,state }, {user,name}){
    console.log('LOAD_CHALLENGE')
    if (!user) return

    const unsubscribe = this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .collection('list')
      .orderBy('day','asc')
      .onSnapshot(snapshot => {
        const data = [];

        snapshot.forEach(doc => {
          data.push({
            ...doc.data(),
            date:doc.data().date.toDate()
          });
          commit('setChallenge', data)
        });

      }, err => {
        console.log(err)
      });
    // onSnapshotを止めるにはunsubscribe()を利用する
    // Stop listening to changes
    // unsubscribe();
  },

  CHECK_CHALLENGE({ commit,state }, {user, key, check, name}){
    if (!user) return
    this.$usersRef
      .doc(user.uid)
      .collection('challenge')
      .doc(name)
      .collection('list')
      .doc(key.toString())
      .update(
        {
          check
        }).then(() => {

          console.log("CHECK_CHALLENGE_SUCCEED");

        }).catch((error) => {

          console.error("CHECK_CHALLENGE_ERROR: ", error);
      })

  },


  // setQuery({ commit, state, dispatch }){
  //   console.log('setQuery')
  // },

  // nuxtServerInitの例
  // nuxtServerInit ({ commit }, { req }) {
    // if (req.session && req.session.authUser) {
    //   commit('SET_USER', req.session.authUser)
    // }
  // },

  // ローカルストレージオブジェクトをセット
  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    commit('initWindow', window)
    commit('initLocalStorage', localStorage)
  }
}

