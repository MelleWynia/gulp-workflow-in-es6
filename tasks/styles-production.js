'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

export default () => {
    return gulp.src('./'+config.paths.source+'/stylus/*.styl')
        .pipe(stylus({
            'include css': true
        })).on('error', notify.onError( (error) => {
            return { icon:false, title:'CSS ERROR ON LINE '+error.line, message:error.message };
        }))
        .pipe(autoprefixer({ //CARE Autoprefixer slows this task down..!
            browsers: config.browsers
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./'+config.paths.build+'/assets/css'));
}