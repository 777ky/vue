import firebase from '@/plugins/firebase'
export const strict = false
export const state = () => ({
  localStorage: null,
  user: false,
})

export const mutations = {
  initLocalStorage(state, payload){
    state.localStorage = payload;
  },
  setUser (state, payload){
    state.user = payload;
  }
}

export const actions = {

  login ({ commit }) {
    this.$router.push('/login/redirect/')
  },

  logout ({ commit,state }) {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          resolve()
        }).catch(()=> reject())
    })
  },


  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    // ローカルストレージオブジェクトをセット
    commit('initLocalStorage', localStorage)
  }
}

export const getters = {
  isAuthenticated (state) {

    return !!state.user
  }
}
