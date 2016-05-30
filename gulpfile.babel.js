'use strict';

import config from './gulpfile.config';

import gulp from 'gulp';
import watch from 'gulp-watch';

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
//
//
//
// Watch
//
//
//
//

gulp.task('default', ['clean'], function () {

    gulp.start('fonts');
    watch([ './'+config.paths.source+'/font/**' ], function() {
        gulp.start('fonts');
    });

    gulp.start('images');
    watch([ './'+config.paths.source+'/image/**/*' ], function() {
        gulp.start('images');
    });

    gulp.start('pug');
    watch([ './'+config.paths.source+'/pug/**/*.pug' ], function() {
        gulp.start('pug');
    });

    gulp.start('styles');
    watch([ './'+config.paths.source+'/stylus/**/*.styl' ], function() {
        gulp.start('styles');
    });

    gulp.start('js');
    watch([ './'+config.paths.source+'/js/**/*.js' ], function() {
        gulp.start('js');
    });

    gulp.start('browser-sync');

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
