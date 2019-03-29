export default ({ store, route, redirect })=> {
  if(!store.getters.isAuthenticated && route.name === 'index') {
    //ログインしてない場合はログイン画面へリダイレクト
    redirect('/login')
  }
}
