'use strict';

import config from '../../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';
var browserSync = require('browser-sync').create();

import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';

export default () => {
    return gulp.src('./'+config.paths.source+'/stylus/*.styl')
        .pipe(sourcemaps.init())
            .pipe(stylus()).on('error', notify.onError( (error) => {
                return { icon:false, title:'CSS ERROR ON LINE '+error.line, message:error.message };
            }))
            .pipe(autoprefixer({ //CARE Autoprefixer slows (x5) this task down..!
                browsers: ['last 2 versions'],
                remove: false // only for dev
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'+config.paths.test+'/assets/css'));
}