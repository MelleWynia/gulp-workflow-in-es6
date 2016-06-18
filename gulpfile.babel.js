'use strict';

import config from './gulpfile.config';

import gulp from 'gulp';

import clean from 'gulp-clean';

//
// Task: Browser Sync
// 

import taskBrowserSync from './tasks/browser-sync';
gulp.task('browser-sync', taskBrowserSync);

//
// Task: Clean build
// 

import taskClean from './tasks/clean';
gulp.task('clean', taskClean);

import taskCleanProduction from './tasks/clean-production';
gulp.task('clean-production', taskCleanProduction);

//
// Pug (formely known as Jade)
//

import taskPug from './tasks/pug';
gulp.task('pug', taskPug);

import taskPugProduction from './tasks/pug-production';
gulp.task('pug-production', taskPugProduction);


//
// Styles
//

import taskStyles from './tasks/styles';
gulp.task('styles', taskStyles);

import taskStylesProduction from './tasks/styles-production';
gulp.task('styles-production', taskStylesProduction);

//
// Assets
//

import taskFonts from './tasks/fonts';
gulp.task('fonts', taskFonts);

import taskFontsProduction from './tasks/fonts-production';
gulp.task('fonts-production', taskFontsProduction);

import taskImages from './tasks/images';
gulp.task('images', taskImages);

import taskImagesProduction from './tasks/images-production';
gulp.task('images-production', taskImagesProduction);

//
// JavaScript
//

import taskJS from './tasks/js';
gulp.task('js', taskJS);

import taskJSProduction from './tasks/js-production';
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
