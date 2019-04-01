export default ({ store, route, redirect })=> {
  // signin以外に非ログインでアクセスした場合
  // if (!store.getters.isAuthenticated && route.name !== 'signin') {
  //   redirect('/signin')
  // }
  store.commit('updatePage', route)
}
