import firebase from '@/plugins/firebase'


export const strict = false

export const state = () => ({
  localStorage: null,
  user: null
})

export const mutations = {
  initLocalStorage(state, payload){
    state.localStorage = payload;
  },
  setUser (state, payload) {
    state.user = payload;
  },
}

export const actions = {
  login ({ commit }) {
    this.$router.push('/login/redirect/')
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(googleProvider)
    // firebase.auth().signInWithPopup(googleProvider);
  },

  logout ({ commit,state }) {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          resolve()
        }).catch(()=> reject())
    })
  },

  setUser ({ commit }, payload) {
    commit('setUser', payload)
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
