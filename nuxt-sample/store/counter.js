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
  signOut({ commit }){
    commit('test', 1000)
  },
}

