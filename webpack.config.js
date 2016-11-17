'use strict';
/**
 * ES6 style configuration
 */
const config = {
    output: {
        //path: './build',
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

export default config;
