'use strict';
//var webpack = require('webpack');
import webpack from 'webpack'
/**
 * ES6 style configuration
 */
export default {
    entry: {
      'main': './src/script.js'
    },
    output: {
        //path: './build',
        filename: 'all.js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ],
    module: {
      loaders: [
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
