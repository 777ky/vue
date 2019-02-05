export const state = () => ({
  count: 0,
  result:[]
})

export const mutations = {
  add(state) {
    state.count += 1
  },
  test(state, num){
    state.count = num
  },
  setData(state, result){
    state.result = result;
  }
}

export const actions = {
  // async signIn({ commit }){
    // ログイン処理
    // const isSignedIn = await ...
    // commit('setSignInState', isSignedIn)
  // },
  signOut({ commit }){
    commit('test', 1000)
  },
  nuxtClientInit ({ commit, state, dispatch }, { req }) {

    console.log(localStorage.tttt);
    localStorage.setItem('tttt', 'value');　
    if (localStorage.accessToken) {
      // commit('user/setToken', localStorage.token)
    }
  }
}

