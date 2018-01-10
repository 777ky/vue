const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: `${__dirname}/vue/result`,
    filename: 'bundle.js'
  },
  module: {
    // noParse: /es6-promise\.js$/,
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js[x]?$/,
        query: {
            cacheDirectory: true,
            // presets: ['es2015'],
            presets: ['env'],
            plugins: ["transform-vue-jsx"]
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
    ]
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })

  ]
}
