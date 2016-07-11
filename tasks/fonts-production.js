'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';

export default () => {

    return gulp.src( './'+config.paths.source+'/fonts/**' )
        .pipe(gulp.dest( './'+config.paths.build+'/assets/fonts' ));
}
