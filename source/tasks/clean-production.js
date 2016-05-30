'use strict';

import config from '../../gulpfile.config';

import gulp from 'gulp';

import clean from 'gulp-clean';

export default () => {

    return gulp.src( './'+config.paths.build, {read: false} )
        .pipe(clean());
}
