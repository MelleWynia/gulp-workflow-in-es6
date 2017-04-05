'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');

const clean = require('gulp-clean');

module.exports = () => {

    return gulp.src( process.env.DEST, {read: false} )
        .pipe(clean());
}
