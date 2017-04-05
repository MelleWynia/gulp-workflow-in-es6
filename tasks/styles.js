'use strict';

const config = require('../gulpfile.config');
const fs = require('fs');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');

const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const debug = require('gulp-debug');

module.exports = () => {

    return gulp.src([
            `./${config.paths.source}/css/all.styl`,
        ])
        .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
            sourcemaps.init()
        ))
        .pipe( stylus({
            'include css': true,
            url: { name: 'url', limit: false },
            rawDefine: {
                $iconsFont: fs.readFileSync(`./${config.paths.source}/fonts/icons-web/icons-web.woff2`).toString('base64'),
            },
        }) )
        .on('error', notify.onError( (error) => {

            console.log(error.message);

            // process message

            let regExpMessage = new RegExp(`^.*(\/${config.paths.source}\/.*):(\\d*):(\\d*)\n`);
            let messageMatches = error.message.match(regExpMessage);

            let path = messageMatches[1];
            let line = messageMatches[2];
            let char = messageMatches[3];

            // compose notification parts

            let title = `STYLUS ERROR – LINE ${line} (${error.name})`;
            let message = path; // + ' ' + mess;

            return { icon:false, title:title, message:message };
        }))
        .pipe(autoprefixer({ // CARE Autoprefixer slows (x5) this task down..!
            browsers: ['last 2 versions', 'ie >= 9']
        }))
        .on('error', notify.onError( (error) => {
            console.log(error);

            let title = `AUTOPREFIXER ERROR – ${error.name}`;
            let message = `${error.message}`;

            return { icon:false, title: title, message: message};
        }))
        .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
            sourcemaps.write()
        ))
        .pipe(gulpif( /MINIFY/.test(process.env.COMMANDS),
            cleanCSS()
        ))
        .pipe(gulp.dest(`${process.env.DEST}/assets/css`))
        .pipe(gulp.dest(`${config.paths.source}/output/css`));
}
