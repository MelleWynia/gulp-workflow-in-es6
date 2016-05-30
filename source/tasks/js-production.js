'use strict';

import config from '../../gulpfile.config';

import gulp from 'gulp';

import uglify from 'gulp-uglify';

export default () => {

    // Please remenber, this task relies on the `js` task being done first!

    return gulp.src( './'+config.paths.test+'/assets/js/**' )
        .pipe(uglify())
        .pipe(gulp.dest( './'+config.paths.build+'/assets/js' ));
}
