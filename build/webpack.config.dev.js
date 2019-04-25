'use strict'

const webpack = require('webpack')
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const sass = require('sass');
const Fiber = require('fibers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {

  mode: 'development',

  entry: {
    bundle: './src/app.js',
    css: './assets/scss/app.scss'
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  devServer: {
    // changes hot loaded into the page without refreshing
    hot: true,
    watchOptions: {
      poll: 10000,
      ignored: /node_modules/
    },
    // BH as hex value
    port: 6268
  },

  devtool: 'source-map', // any 'source-map'-like devtool is possible

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader', options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader', options: {
              config: {
                path: './build/postcss/'
              },
              sourceMap: true
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              // avoid overhead of asynchronous callbacks
              fiber: Fiber,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  // disabling cache in watch mode
  cache: false,

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      files: './assets/scss/**/*.scss'
    }),
    new MiniCssExtractPlugin({
      filename: 'app.css'
    })
  ]
}
