'use strict';
/**
 * gulpfile ES6 style without modules
 * @see  https://webpack.github.io/docs/usage-with-gulp.html
 */
/* global require */
var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
    return gulp.src('src/script.js')
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('build/'))
    ;
});