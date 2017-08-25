// const path = require('path')

module.exports = {
    entry: {
        bundle: './src/scripts/index.js'
    },
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/app/scripts`,
        // 出力ファイル名
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          // 拡張子 .js の場合
          test: /\.vue$/,
          use: [
            {
              // Babel を利用する
              loader: 'babel-loader',
              // Babel のオプションを指定する
              options: {
                presets: [
                  // env を指定することで、ES2017 を ES5 に変換。
                  // {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
                  // webpack の Tree Shaking 機能が使えない
                  ['env', {'modules': false}],
                  'react'
                ]
              }
            }
          ],
          // node_modules は除外する
          exclude: /node_modules/
        },

        {
          // 拡張子 .css の場合
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  require('postcss-cssnext')({"browsers": "last 2 versions, ios 8, android 4.0"})
                ]
              }
            }
          ]
        }

      ]
    },
    // ソースマップを有効にする
    devtool: 'source-map'

}
