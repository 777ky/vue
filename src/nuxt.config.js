const siteName = 'サイトネーム';
const apiPath = 'https://jsondata.okiba.me/v1/json/ymC4X190129052320';
const webpack = require('webpack');
const color = require('vuetify/es5/util/colors')
const colors = color.default;

module.exports = {
  // srcDir: '.',
  css: [
    '~/static/styles/main.scss',
  ],

  env: {
    siteName: process.env.BASE_URL || siteName,
    APIKEY:'AIzaSyCZcleLFLX7m1bZw2UmQ0kjJpkUI3j8dQo',
    AUTHDOMAIN:'vue-labs.firebaseapp.com',
    DATABASEURL:'https://vue-labs.firebaseio.com',
    PROJECTID:'vue-labs',
    STORAGEBUCKET:'vue-labs.appspot.com',
    MESSAGINGSENDERID:'535096312104'
  },
  mode: 'universal',
  // mode:'spa',
  head: {
    script: [
      {
        src:'https://code.createjs.com/1.0.0/createjs.min.js'
      },
      {
        src:'https://code.createjs.com/1.0.0/preloadjs.min.js'
      }
    ],
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'apple-touch-startup-image', href: '/icon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',

  build: {

    publicPath: '/assets/',
    extractCSS: true,
    extend (config, { isDev, isClient }) {
      // Run ESLint on save
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
    // '@nuxtjs/onesignal',
    // '@nuxtjs/pwa',
    // '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    options: {
      customProperties: true
    },
    theme: {
      backgroud:'#fafafa',
      primary: '#03dcf3',
      secondary:'#ff4c6c',
      accent: '#479ac8',
      info:'#4B9CC9',
      txtPrimary: '#3A6A75',
      txtSecondary: '#95989A',
      primaryRev: '#ffffff'
    },
      // theme: {
      //   primary:'#ccc',
      //   accent: colors.grey.darken3,
      //   secondary: colors.amber.darken3,
      //   info: colors.teal.lighten1,
      //   warning: colors.amber.base,
      //   error: colors.deepOrange.accent4,
      //   success: colors.green.accent3
      //   }
    },
  // oneSignal: {  // oneSignal入れるとエラーでる・・・
  //   init: {
  //     appId:'a954b570-981b-46e2-aabe-0f803b9cb290',
  //     allowLocalhostAsSecureOrigin: true,
  //     welcomeNotification: {
  //       disable: true
  //     }
  //   }
  // },
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
    icon:'icon.png',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    // dev: true, //開発環境でもPWA

    // たとえば、st-hatena.comの画像をcacheFirstでキャッシュしたい場合
    // networkFirst（Network falling back to cache、ネットワークが利用できない場合キャッシュを利用）
    // cacheFirst（Cache falling back to network、キャッシュが利用できない場合ネットワークから取得）
    // fastest（Cache & network race、ネットワーク接続とキャッシュを同時に要求し、レスポンスが早い方を採用）
    // cacheOnly（オンライン接続せずキャッシュのみを使用）
    // networkOnly(キャッシュしない)

    // runtimeCaching: [
    //   {
    //     urlPattern: 'https://cdn-ak.f.st-hatena.com/images/*',
    //     handler: 'cacheFirst',
    //     method: 'GET',
    //   },
    // ],
  },
  router: {
    middleware: ['authenticated']
  },
  plugins:[
    '@/plugins/firebase',
    {
      src: '@/plugins/nuxt-client-init',
      ssr: false
    },
  ],
}
