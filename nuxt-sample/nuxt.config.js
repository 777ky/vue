const siteName = 'サイトネーム';
const apiPath = 'https://jsondata.okiba.me/v1/json/ymC4X190129052320';

module.exports = {
  env: {
    siteName: process.env.BASE_URL || siteName
  },
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    // title: 'nuxt-sample',
    titleTemplate: '%s | '+siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  /* for PWA */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/onesignal',
    '@nuxtjs/axios'
  ],
  axios: {
  },
  manifest: {
    name: siteName,
    lang: 'ja',
    short_name: 'nuxt',
    title: 'nuxt-startタイトル',
    'og:title': 'nuxt-startです',
    description: 'nuxt-start説明',
    'og:description': 'nuxt-startです',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true, //開発環境でもPWA
    // たとえば、tumblr.comの画像をcacheFirstでキャッシュしたい場合
    runtimeCaching: [
      {
        urlPattern: 'https://*.media.tumblr.com/*',
        handler: 'cacheFirst',
        method: 'GET',
      },
    ],
  },
  // push
  oneSignal: {
    init: {
      appId: 'a954b570-981b-46e2-aabe-0f803b9cb290',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  }
}
