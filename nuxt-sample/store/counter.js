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
  }
}

