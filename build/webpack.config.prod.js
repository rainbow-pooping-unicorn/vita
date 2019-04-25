'use strict'

const webpack = require('webpack')
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const sass = require('sass');
const Fiber = require('fibers');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  mode: 'production',

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
      poll: true
    }
  },

  devtool: 'source-map', // any 'source-map'-like devtool is possible

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          mangle: true,
          sourceMap: true,
          include: /\.js$/
        },
      }),
    ],
  },

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
        use: ExtractTextPlugin.extract([
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: '../dist'
            }
          },
          {
            loader: 'extract-loader'
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
        ])
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin(
      'app.css'
    )
  ]
}
