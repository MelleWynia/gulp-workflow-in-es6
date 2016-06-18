'use strict';

import config from '../gulpfile.config';

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

                console.log(error.message);

                // process message

                let regExpMessage = new RegExp('^.*(\/'+config.paths.source+'\/.*):(\\d*):(\\d*)\n');
                let messageMatches = error.message.match(regExpMessage);

                let path = messageMatches[1];
                let line = messageMatches[2];
                let char = messageMatches[3];

                // compose notification parts

                let title = 'CSS ERROR ON LINE '+line+' ('+error.name+')';
                let message = path;

                return { icon:false, title:title, message:message };
            }))
            .pipe(autoprefixer({ //CARE Autoprefixer slows (x5) this task down..!
                browsers: config.browsers,
                remove: false // only for dev
            }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'+config.paths.test+'/assets/css'));
}