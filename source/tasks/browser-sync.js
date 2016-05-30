'use strict';

import config from '../../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

export default () => {
    browserSync.init({
        server: {
            baseDir: "./"+config.paths.test
        },
        watchOptions: {
            ignoreInitial: true,
            ignored: '*.txt'
        },
        files: [
            "test/**/*.*"
        ]
    });
}
