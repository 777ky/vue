export const state = () => ({
  count: 0,
  result:[]
})

export const mutations = {
  addCount(state) {
    state.count += 1
  },
  setInit(state, payload){
    state.count = payload
  },
  setData(state, payload){
    state.result = payload;
  }
}

export const actions = {
  addCount({ commit }){
    commit('addCount')
  },
  setInit({ commit,state }){
    commit('setInit', 0)
  },
  setData({ commit ,result}){
    commit('setData', result)
  },
  // sample
  // 呼び出し側でstore.dispatch('actionA').then(() => {})と書ける
  // async actionA ({ commit }) {
  //   commit('gotData', await getData())
  // },
  // async actionB ({ dispatch, commit }) {
  //   await dispatch('actionA') // `actionA` が完了するのを待機する
  //   commit('gotOtherData', await getOtherData())
  // }

}

// export const getters = {
//   isAuthenticated (state) {
//     return !!state.user
//   }
// }

