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
  // チャレンジタイトル格納用
  challengeTitile:null,
  // チャレンジdescription格納用
  challengeDesc:null,
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

  challengeTitile: state => state.challengeTitile,
  challengeDesc: state => state.challengeDesc,
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
    // console.log('チャレンジステイタスにisSetting書き込み',payload.isSetting)
    state.startDate = payload.date.toDate()
    state.isSetting = payload.isSetting

    state.challengeTitile = payload.title
    state.challengeDesc = payload.description
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
    // console.log(start)
    const term = Math.floor((today - start) / 86400000)+1
    // console.log(term)
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
    console.log('SET_30_DATE')
    const data = require('./'+name+'.json')
    const batch = this.$firebaseStore().batch();

    data && Object.keys(data).forEach(key => {
      const nestedContent = data[key];
      const ref = this.$usersRef.doc(user.uid)

      if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach((docTitle,index) => {

          const y = date.getFullYear()
          const m = date.getMonth()
          const d = date.getDate()+index

          batch.set(ref, {
            [name]:{
              [key]:{
                [docTitle]:{
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

  // 5.チャレンジを登録する
  SET_CHALLENGE({ commit,state,dispatch }, {user,name}) {
      console.log('SET_CHALLENGE')
      const data = require('./'+name+'.json')
      const date = new Date()
      const batch = this.$firebaseStore().batch();

      data && Object.keys(data).forEach(key => {
        const nestedContent = data[key]
        const ref = this.$usersRef.doc(user.uid)

        if (typeof nestedContent === "object") {

          Object.keys(nestedContent).forEach((docTitle,index) => {

            const y = date.getFullYear()
            const m = date.getMonth()
            const d = date.getDate()+index

            batch.set(ref, {
              [name]:{
                [key]:{
                  [docTitle]:{
                    ...nestedContent[docTitle],
                    date:new Date(y,m,d)
                  }
                }
              }
            },{merge:true})
          });
        }else{
          batch.set(ref, {
            [name]:{
              [key]:data[key]
            }
          },{merge:true})
        }
      });

      batch.commit().then(()=>{
        console.log('SET_CHALLENGE_SUCCEED')
      }).catch(error=>{
        console.error("SET_CHALLENGE_SUCCEED_ERROR: ", error);
      })
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
        // console.log('setIsSetting=>'+flag)
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
      .set({
        [name]:{
          isSetting:flag
        }
      },{merge:true})
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

    // TODO:アイテム増えたらここを増やす
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
    user.reauthenticateAndRetrieveDataWithCredential(credential).then(()=>{
      user.delete().then(()=>{
        console.log('deleted')
        dispatch('signOut',false)
        this.$router.push('/signin')
      }).catch(function(error) {
        console.log(error)
      });
    }).catch(function(error) {
      console.log(error)
    });

    this.$usersRef.doc(user.uid).delete().then(
      ()=>{
        console.log("Document successfully deleted!");
      }).catch(error=>{
        console.error(error)
      })
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

    const snapshot = await this.$usersRef.doc(user.uid).get()

    // this.$usersRef.doc(user.uid).get().then((snapshot)=>{
    //   console.log(snapshot)
    //   if (snapshot.exists){
    //     commit('setChallengeState', snapshot.data()[name])
    //   }else{
    //     console.log('GET_CHALLENGE_STATUS_ERROR')
    //   }
    // })

    if (snapshot.exists){
      // console.log('^^^^^^^^^^^^'+snapshot.data()[name].isSetting)
      commit('setChallengeState', snapshot.data()[name])
    }else{
      console.log('GET_CHALLENGE_STATUS_ERROR')
    }
  },

  // チャレンジステイタスを取得する
  LOAD_CHALLENGE_STATUS({ commit,state }, {user,name}){

    // TODO:ここでdoc(user.uid)自体の更新を監視しているので
    // 更新ある旅にstatus変わってしまう？
    console.log('LOAD_CHALLENGE_STATUS')
    if (!user) return

      const unsubscribe = this.$usersRef
      .doc(user.uid)
      .onSnapshot(snapshot => {
        // console.log('DB書き込みあるたびにステイタスを変える',snapshot.data()[name])
        // console.log('DB書き込みあるたびにステイタスを変える',name,snapshot.data()[name].isSetting)
        commit('setChallengeState',snapshot.data()[name])
      }, err => {
        console.log(err)
      });
  },

  // チャレンジデータを取得
  LOAD_CHALLENGE({ commit,state }, {user,name}){
    console.log('LOAD_CHALLENGE')
    if (!user) return

    const unsubscribe = this.$usersRef
      .doc(user.uid)
      .onSnapshot(snapshot => {
        const data = [];
        const list = snapshot.data()[name].list

        Object.keys(list).forEach(key => {
          // console.log(list[key])
          data.push({
            ...list[key],
            date:list[key].date.toDate()
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

  // 実施完了したらcheckをtrueとする
  CHECK_CHALLENGE({ commit,state }, {user, key, check, name}){
    if (!user) return
    this.$usersRef
      .doc(user.uid)
      .set({
        [name]:{
          list:{
            [key]:{
              check
            }
          }
        }
        },{merge:true}).then(() => {
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

