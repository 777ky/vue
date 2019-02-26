importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ec97ec7f743378fdba9.js",
    "revision": "bc2383151644f25a519d855266dc842b"
  },
  {
    "url": "/_nuxt/17c9ae6a921bedeb60c2.js",
    "revision": "e23f48813a72dd2f0d9a4fdf63b5f084"
  },
  {
    "url": "/_nuxt/2c70a679b0ffb8db801f.js",
    "revision": "cfa9c635dec50f2be783b89640e3afc6"
  },
  {
    "url": "/_nuxt/3c98912e924a3db56249.js",
    "revision": "5bf63d4c1405d8bebf83f17479515e7d"
  },
  {
    "url": "/_nuxt/4456c5681d5352045804.js",
    "revision": "065d15860164f0b026ce1d57c69fb413"
  },
  {
    "url": "/_nuxt/47b708a47fd42d2f5bac.js",
    "revision": "279bb52f286cd3ca52a8e380749d41d2"
  },
  {
    "url": "/_nuxt/8875e21c5f332dfefee0.js",
    "revision": "6db0f4d72a63dd98e5d9b4a0e6918202"
  },
  {
    "url": "/_nuxt/a013a711a3ae29570474.js",
    "revision": "00bb82cb665410ae13a8c20366f4a412"
  },
  {
    "url": "/_nuxt/be7f921ac7ac3fdc0523.js",
    "revision": "da2762fc389cd4ad11594b3858a4b35c"
  },
  {
    "url": "/_nuxt/bf1946cf977b152a4ca9.js",
    "revision": "55a2f9bb82cc59b3c0170e9bb6a8c97d"
  },
  {
    "url": "/_nuxt/c3710fcbdd424c29f8e0.js",
    "revision": "5003a5758bf9e3eba502675c1235407f"
  }
], {
  "cacheId": "nuxt-sample",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://cdn-ak.f.st-hatena.com/images/*'), workbox.strategies.cacheFirst({}), 'GET')
