'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');
const notify = require('gulp-notify');

const clean = require('gulp-clean');

module.exports = () => {

    return gulp.src( `${process.env.DEST}/assets/fonts`, {read: false} )
        .pipe(clean())
        .on('end', () => {
            return gulp.src( `./${config.paths.source}/fonts/**/*` )
                .pipe(gulp.dest( `${process.env.DEST}/assets/fonts` ))
                .pipe(notify({
                    icon: false,
                    onLast: true,
                    title: `Font assets updated`,
                    message: `Cleaned and copied font to dist/assets/fonts`
                }));
        });
}
