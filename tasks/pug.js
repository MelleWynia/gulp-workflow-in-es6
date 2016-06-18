'use strict';

import config from '../gulpfile.config';

import gulp from 'gulp';
import notify from 'gulp-notify';

import pug from 'gulp-pug';

export default () => {

    //
    // You can easily uncomment the notifications - these
    // can be handy when your pug tasks takes long (> 7 sec)
    // and it starts to be handy to be informed when it’s ready.
    //

    return gulp.src( './'+config.paths.source+'/pug/*.pug' )
        //.pipe(notify({ icon:false, onLast:false, title:'Processing pug', message: 'Started processing changes in pug' }))
        .pipe(pug({
            pretty: true,
            data: {
              config: config
            }
        })).on('error', notify.onError(function (error) {
            
            console.log(error);
            let filename = error.filename || error.path;
                filename = filename.replace(/^.*\/(.+?)$/,'$1');
            let title = 'PUG ERROR ON LINE '+error.line+' IN: '+filename;
            let message = error.msg || error.message;

            return { icon:false, title:title, message:message };
        }))
        .pipe(gulp.dest( './'+config.paths.test+'' ))
        //.pipe(notify({ icon:false, onLast:true, title:'Updated pug', message: 'Compiled the pug to html' }));
}
