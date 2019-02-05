export default ({ store, route, redirect })=> {
  if (!store.getters.isAuthenticated && route.name === 'auth') {
    //ログインしてない場合はログイン画面へリダイレクト
    redirect('/auth/login')
  }
}
