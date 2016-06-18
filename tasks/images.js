'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import clean from 'gulp-clean';

export default () => {

    return gulp.src( './'+config.paths.test+'/assets/images', {read: false} )
        .pipe(clean())
        .on('end', function(){
            return gulp.src( './'+config.paths.source+'/images/**' )
                .pipe(gulp.dest( './'+config.paths.test+'/assets/images' ))
                .pipe(notify({ icon:false, onLast:true, title:'Image asset updated', message: 'Cleaned and copied images to dist/asset/image' }));
        });
}
