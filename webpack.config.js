var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
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
                        presets: ['env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json', '.css', '.scss' ],
        modules: [
          'node_modules'
        ],
        alias: {
            styles: path.resolve(__dirname, 'src/assets/styles'),
            images: path.resolve(__dirname, 'src/assets/images'),
            components: path.resolve(__dirname, 'src/components'),
            pages: path.resolve(__dirname, 'src/pages'),
            services: path.resolve(__dirname, 'src/services'),
            state: path.resolve(__dirname, 'src/state'),
            utilities: path.resolve(__dirname, 'src/utilities'),
            vue: 'vue/dist/vue.js'
        }
    }
};