import firebase from '@/plugins/firebase'

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const strict = false

export const state = () => ({
  // authentication:false,
  ls:{},
  isDuring: false,
  user: null
})

export const mutations = {
  setLocalStorage(state, payload){
    state.ls = payload;
  },
  setUser (state, payload) {
    state.user = payload;
  },
  setIsDuring(state, payload){
    state.isDuring = payload;
  }
}

export const actions = {
  login ({ commit }) {

    commit('setIsDuring', true)
    // this.$router.push('/auth/')

    // firebase.auth().signInWithRedirect(googleProvider)

    firebase.auth().signInWithPopup(googleProvider);

    // return new Promise((resolve, reject) => {
    //   firebase.auth().signInWithRedirect(googleProvider)
    //     .then(() => {
    //       //signInWithRedirectは呼ばれたところに戻るだけっぽい
    //       resolve()
    //     })
    //     .catch((err) => {
    //       reject(err)
    //     })
    // })
  },

  logout ({ commit }) {
    // return new Promise((resolve, reject) => {
    // })
    firebase.auth().signOut()
      .then(() => {
        commit('setUser', null)
      })
  },

  setUser ({ commit }, payload) {
    commit('setUser', payload)
  },

  nuxtClientInit ({ commit, state, dispatch }, { req }) {
    const item = localStorage.getItem('tttt');
    commit('setLocalStorage', item)
    console.log(item);

    // localStorage.setItem('tttt', 'value');

    if (localStorage.accessToken) {
      // commit('user/setToken', localStorage.token)
    }
  }

  // setAuthentication ({ commit }, payload) {
  //   commit('setAuthentication', payload)
  // }
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  }
}
