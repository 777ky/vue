// nuxtClientInitを使うためのプラグイン
export default async (ctx) => {
  // window.localstorageを利用するために必要なプラグイン
  await ctx.store.dispatch('nuxtClientInit', ctx)
}
