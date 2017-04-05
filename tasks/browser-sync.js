'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');

module.exports = () => {

    browserSync.init({
        server: {
            baseDir: process.env.DEST
        },
        files: [
            `${process.env.DEST}/**/*!(.html)`
        ]
    });

}
