'use strict';
/**
 * gulpfile ES6 style without modules
 * @see  https://webpack.github.io/docs/usage-with-gulp.html
 */
/* global require */
var gulp = require('gulp');
var webpack = require('webpack-stream');
//var babel = require('gulp-babel');
var webpackConfig = require('./webpack.config.js');

gulp.task('default', function() {
    return gulp.src('src/script.js')
        // .pipe(babel({
        //     presets: ['es2015', 'stage-2']
        // }))
        .pipe(webpack( webpackConfig ))
        .pipe(gulp.dest('build/'))
    ;
});