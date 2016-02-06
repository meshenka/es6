'use strict';
/**
 * gulpfile ES6 style without modules
 *
 * @see  https://webpack.github.io/docs/usage-with-gulp.html
 * @see https://markgoodyear.com/2015/06/using-es6-with-gulp/
 */
import gulp from 'gulp'
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import webpackConfig from './webpack.config';

gulp.task('default', () => {
    return gulp.src('src/script.js')
        .pipe(webpack( webpackConfig ))
        .pipe(uglify())
        .pipe(gulp.dest('build/'))
    ;
});