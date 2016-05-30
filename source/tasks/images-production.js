'use strict';

import config from '../../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import clean from 'gulp-clean';
import imagemin from 'gulp-imagemin';

export default () => {

    return gulp.src( './'+config.paths.build+'/assets/images', {read: false} )
        .pipe(clean())
        .on('end', function(){
            
            return gulp.src( './'+config.paths.source+'/images/**' )
                .pipe(imagemin({
                    progressive: true
                }))
                .pipe(gulp.dest( './'+config.paths.build+'/assets/images' ))
                .pipe(notify({ icon:false, onLast:true, title:'Image asset updated & optimized', message: 'Cleaned, minimized and copied images to dist/asset/image' }));
        });
}
