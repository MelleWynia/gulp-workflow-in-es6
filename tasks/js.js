'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');

const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

module.exports = () => {
    return gulp.src([
            `./${config.paths.source}/js/libraries/**/*.js`,
            `./${config.paths.source}/js/plugins/**/*.js`,
            `./${config.paths.source}/js/website/**/*.js`,
        ])
        .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
            sourcemaps.init()
        ))
            .pipe(babel({
                presets: ['es2015']
            }))
            .on('error', notify.onError(function (error) {
                return {
                    icon: false,
                    title: `JS ERROR ON LINE ${error.loc.line}`,
                    message: error.message.replace(/(.\.js:)( .)/,"$1\n$2")
                };
            }))
            .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
                uglify()
            ))
            .pipe(concat('all.js'))
        .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
            sourcemaps.write()
        ))
        .pipe(gulp.dest(`${process.env.DEST}/assets/js`));
}
