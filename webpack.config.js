'use strict';
/* global require */
/* global module */
/* global __dirname */
/**
 * @see http://www.2ality.com/2015/04/webpack-es6.html
 * @type {[type]}
 */
var path = require('path');
module.exports = {
    entry: './src/script.js',
    output: {
        path: './build',
        filename: 'all.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'src'),
              loader: 'babel-loader' }
        ]
    }
};
