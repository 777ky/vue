// window.localstorageを利用するため
// nuxtClientInitを使うためのプラグイン
export default async (ctx) => {
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
