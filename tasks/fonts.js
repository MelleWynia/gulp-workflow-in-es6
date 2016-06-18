'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import clean from 'gulp-clean';

export default () => {

    return gulp.src( './'+config.paths.test+'/assets/font', {read: false} )
        .pipe(clean())
        .on('end', () => {
            return gulp.src( './'+config.paths.source+'/font/**' )
                .pipe(gulp.dest( './'+config.paths.test+'/assets/font' ))
                .pipe(notify({ icon:false, onLast:true, title:'Font asset updated', message: 'Cleaned and copied font to dist/asset/font' }));
        });
}
