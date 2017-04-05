'use strict';

const config = require('../gulpfile.config');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');

const clean = require('gulp-clean');

module.exports = () => {
    return gulp.src( `${process.env.DEST}/media/`, {read: false} )
        .pipe( clean() )
        .on('end', () => {
            return gulp.src( `./${config.paths.source}/media/**` )
                .pipe(gulp.dest( `./${process.env.DEST}/media` ))
                .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
                    notify({
                        icon: false,
                        onLast: true,
                        title: 'Media updated',
                        message: 'Cleaned and copied media to /media'
                    })
                ));
        });
}
