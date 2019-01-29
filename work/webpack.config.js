const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'production',
    entry: {
        bundle: './src/scripts/index.js'
    },
    output: {
        path: `${__dirname}/app/scripts`,
        filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            options:{
              presets: ['env'],
              plugins: ["transform-vue-jsx"]
            }
            // bebel@7の場合
            // options: {
            //   presets: ['@babel/preset-env']
            // }
          }

        },

        {
          // 拡張子 .vue の場合
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
            }
          ],
        },

        // {
        //   test: /\.(scss|css)/,
        //   use: [
        //       'style-loader',
        //       {
        //           loader: 'css-loader',
        //           options: {
        //               // オプションでCSS内のurl()メソッドの取り込みを禁止する
        //               url: false,
        //               // ソースマップ
        //               sourceMap: true,

        //               // 0 => no loaders (default);
        //               // 1 => postcss-loader;
        //               // 2 => postcss-loader, sass-loader
        //               importLoaders: 2
        //           },
        //       },
        //       {
        //           loader: 'sass-loader',
        //           options: {
        //               // ソースマップ
        //               sourceMap: true,
        //           }
        //       }

        //   ]
        // }

      ]
    },
    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
      new VueLoaderPlugin()
    ],
    // ソースマップを有効にする
    devtool: 'source-map'

}
