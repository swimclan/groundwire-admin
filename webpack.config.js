var path = require('path');

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './entry.js'],
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
          loader: 'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
        }, {
          loader: 'image-webpack-loader'
        }]
      },
      {
        test: /\.s[a|c]ss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2017']
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',  // where the fonts will go
            publicPath: '../'     // override the default path
          }
        }]
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.json', '.css', '.scss', '.vue' ],
    modules: [
      'node_modules'
    ],
    alias: {
      config: path.resolve(__dirname, './config'),
      styles: path.resolve(__dirname, './src/assets/styles'),
      images: path.resolve(__dirname, './src/assets/images'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      services: path.resolve(__dirname, './src/services'),
      state: path.resolve(__dirname, './src/state'),
      tools: path.resolve(__dirname, './src/tools'),
      vue: 'vue/dist/vue.js'
    }
  }
};
