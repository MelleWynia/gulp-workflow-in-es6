'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const gulpfilter = require('gulp-filter');
const util = require('gulp-util');
const notify = require('gulp-notify');

const favicons = require('gulp-favicons');

const imagemin = require('gulp-imagemin');

module.exports = () => {
    return gulp
        .src( `${config.paths.source}/favicon-template-1024x1024.png` )
        .pipe(favicons({
            path: `/assets/favicons`,
            pipeHTML: true,
            html: 'favicons.html',
            preferOnline: false,
            online: false,
            icons: {
                appleStartup: false,
                coast: false,
                firefox: false,
                yandex: false,
            },
        }))
        .on('error', util.log)
        .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
            imagemin({
                progressive: true
            })
        ))
        .pipe(gulp.dest(`${config.paths.source}/images/favicons`))
        .pipe(notify({
            icon: false,
            onLast: true,
            title: `Favicons asset added/updated`,
            message: `You can force a favicon refresh by upping the\n ?v=XXXXXX in source/favicons.html`
        }));
}

/*


*/
