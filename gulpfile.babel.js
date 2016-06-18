'use strict';

import config from './gulpfile.config';

import gulp from 'gulp';

import clean from 'gulp-clean';

//
// Task: Browser Sync
// 

import taskBrowserSync from './source/tasks/browser-sync';
gulp.task('browser-sync', taskBrowserSync);

//
// Task: Clean build
// 

import taskClean from './source/tasks/clean';
gulp.task('clean', taskClean);

import taskCleanProduction from './source/tasks/clean-production';
gulp.task('clean-production', taskCleanProduction);

//
// Pug (formely known as Jade)
//

import taskPug from './source/tasks/pug';
gulp.task('pug', taskPug);

import taskPugProduction from './source/tasks/pug-production';
gulp.task('pug-production', taskPugProduction);


//
// Styles
//

import taskStyles from './source/tasks/styles';
gulp.task('styles', taskStyles);

import taskStylesProduction from './source/tasks/styles-production';
gulp.task('styles-production', taskStylesProduction);

//
// Assets
//

import taskFonts from './source/tasks/fonts';
gulp.task('fonts', taskFonts);

import taskFontsProduction from './source/tasks/fonts-production';
gulp.task('fonts-production', taskFontsProduction);

import taskImages from './source/tasks/images';
gulp.task('images', taskImages);

import taskImagesProduction from './source/tasks/images-production';
gulp.task('images-production', taskImagesProduction);

//
// JavaScript
//

import taskJS from './source/tasks/js';
gulp.task('js', taskJS);

import taskJSProduction from './source/tasks/js-production';
gulp.task('js-production', ['js'], taskJSProduction);

//
// Develop (initiating watch)
//

gulp.task('develop', ['pug', 'fonts', 'images', 'styles', 'js'], () => {

    gulp.start('browser-sync');

    gulp.watch([ './'+config.paths.source+'/fonts/**/*' ], ['fonts']);
    gulp.watch([ './'+config.paths.source+'/images/**/*' ], ['images']);
    gulp.watch([ './'+config.paths.source+'/pug/**/*.pug' ], ['pug']);
    gulp.watch([ './'+config.paths.source+'/stylus/**/*' ], ['styles']);
    gulp.watch([ './'+config.paths.source+'/js/**/*.js' ], ['js']);

});

//
//
//
//
// Watch (default)
//
//
//
//

gulp.task('default', ['clean'], function () {
    gulp.start(['develop']);
});

//
//
//
//
// Production
//
//
//
//

gulp.task('build', ['clean-production'], function () {
    gulp.start('fonts-production');
    gulp.start('images-production');
    gulp.start('pug-production');
    gulp.start('styles-production');
    gulp.start('js-production');
});
