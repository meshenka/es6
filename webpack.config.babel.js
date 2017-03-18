'use strict';

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

/**
 * ES6 style configuration
 */
export default {
  entry : {
    'main': './src/script.js',
    'styles': './src/styles.scss'
  },
  output : {
    path: './build',
    filename: '[name].js'
  },
  plugins : [
    new ExtractTextPlugin('styles.css')
  ],
  module : {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['stage-2', 'es2015']
        }
      }
    ]
  }
}
