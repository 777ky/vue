# firebaseにdeployする
※firebaseで外部APIを利用するためには有料プランが必要
``` [.firebaserc]
{
  "projects": {
    "default": "vue-labs"
  }
}
```

### 静的ファイルをhostingする場合
nuxt generateしたファイルが/dist配下にある例
``` [firebase.json]
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
```
$ firebase deploy
```

### firebase functionsを利用する場合
静的ファイルはpublicに置いて/functions配下にfunctionsのソースを設定する例
```  [firebase.json]
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [{
      "source": "**",
      "function": "ssrapp"
    }]
  },
  "functions": {
    "source": "functions"
  }
}
```

next buildしたものはfunctions配下に作成されるようにしておき・・・
``` [src/nuxt.config.js]
  :
  :
  mode: 'universal',
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
  :
  :
```

functions/nuxt配下のファイル群をpublicに移動したりする。
```  [package.json]
  :
  :
  "scripts": {
    "setup": "npm run clean && npm run copyassets && npm run copystatic",
    "clean": "rm -rf public/*",
    "copyassets": "cp -R functions/nuxt/dist/ public/assets",
    "copystatic": "cp -R src/static/* public",
    "serve": "firebase serve --only hosting,functions",
    "deploy": "firebase deploy"
  },
  :
  :
```

functions/index.jsの例
``` [functions/index.js]
const functions = require('firebase-functions');
const express = require('express');
const { Nuxt } = require('nuxt');

const app = express();
const nuxt = new Nuxt({
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/assets/'
    }
});

async function handleRequest(req, res) {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600")
  await nuxt.ready(); // ← nuxt2.5からnuxt.ready()でawaitしないといけなくなった！！
  return await nuxt.render(req, res);
}
app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app);
```


