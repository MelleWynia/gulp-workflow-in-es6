'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');

const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');

module.exports = () => {

    return gulp.src( `${process.env.DEST}/assets/images`, {read: false} )
        .pipe(clean())
        .on('end', () => {
            return gulp.src( `./${config.paths.source}/images/**` )
                .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
                    imagemin({
                        progressive: true
                    })
                ))
                .pipe(gulp.dest( `./${process.env.DEST}/assets/images` ))
                .pipe(notify({
                    icon: false,
                    onLast: true,
                    title: `Image asset updated`,
                    message: `Cleaned${/MINIFY/.test(process.env.COMMANDS) ? `, optimized` : ``} and copied images to /assets/image`
                }));
        });
}
