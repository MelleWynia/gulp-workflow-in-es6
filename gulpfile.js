'use strict';

const config = require('./gulpfile.config');

const gulp = require('gulp');

const clean = require('gulp-clean');
const watch = require('gulp-watch');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');

// Find arguments: --build, --minify

let commands = [];
    if (process.argv.indexOf('--minify') >= 0) {
      commands.push('MINIFY');
    }
    if (process.argv.indexOf('--build') >= 0) {
      commands.push('BUILD')
    }

// Care: process.env properties are always stored as strings with toString()..!
process.env.COMMANDS = commands.join('|');

process.env.DEST = /BUILD/.test(process.env.COMMANDS) ? `./${config.paths.build}` : `./${config.paths.test}`;


//
//
// Tasks
//
//

gulp.task('browser-sync', require('./tasks/browser-sync'));
gulp.task('clean', require('./tasks/clean'));
gulp.task('pug', require('./tasks/pug'));
gulp.task('styles', require('./tasks/styles'));
gulp.task('icons', require('./tasks/icons'));
gulp.task('fonts', require('./tasks/fonts'));
gulp.task('images', require('./tasks/images'));
gulp.task('media', require('./tasks/media'));
gulp.task('js', require('./tasks/js'));

gulp.task('create-favicons', require('./tasks/create-favicons'));

//
//
// Watch
//
//

gulp.task('watch', () => {
    watch([ `${config.paths.source}/icons/**/*` ], () => gulp.start('icons') );
    watch([ `${config.paths.source}/fonts/**/*` ], () => gulp.start('fonts') );
    watch([ `${config.paths.source}/images/**/*` ], () => gulp.start('images') );
    watch([ `${config.paths.source}/media/**/*` ], () => gulp.start('media') );
    watch([ `${config.paths.source}/**/*` ], () => {
        gulp.start('pug', () => { browserSync.reload(); })
    });
    watch([ `${config.paths.source}/**/*.styl` ], () => gulp.start('styles') );
    watch([ `${config.paths.source}/**/*.js` ], () => gulp.start('js') );
});

//
//
// Start (care: needs clean first (default))
//
//

gulp.task('start', ['fonts', 'images', 'media', 'styles', 'js', 'icons'], () => {

    if (process.env.BUILD !== 'true') {
        gulp.start('browser-sync');
    }

    gulp.start('pug');

    if (process.env.BUILD !== 'true') {
        gulp.start('watch');
    }
});

gulp.task('default', ['clean'], () => {
    gulp.start(['start']);
});
