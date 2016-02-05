'use strict';
/* global module */
/**
 * @see http://www.2ality.com/2015/04/webpack-es6.html
 * @type {[type]}
 */
module.exports = {
    // entry: './src/script.js',
    output: {
        // path: './build',
        filename: 'all.js'
    },
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
};
