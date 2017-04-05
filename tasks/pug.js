'use strict';

const npm_package = require('../package.json');
const config = require('../gulpfile.config');

const gulp = require('gulp');
const gulpif = require('gulp-if');
const gulpfilter = require('gulp-filter');
const notify = require('gulp-notify');

const pug = require('gulp-pug');
const pugIncludeGlob = require('pug-include-glob');

module.exports = () => {

    return gulp
        .src([
            `./${config.paths.source}/website/*.pug`,
        ])
        .pipe(pug({
            pretty: true,
            data: {
                npm_package: npm_package,
                config: config,
            },
            plugins: [
                pugIncludeGlob({}),
            ]
        }))
        .on('error', notify.onError( (error) => {

            console.log(error);

            // Process path

            let path = error.path || error.filename;
            let regExpPath = new RegExp(`^.+(\/${config.paths.source}\/.+)$`);

            if (path) {
                path = path.replace(regExpPath, '$1');
            }

            // Process line number

            let line = error.line;

            if (!line) {

                if (error.showStack) {
                    let regExpMessage = new RegExp('^(?:.*\n.*)*([0-9]+)(?:.*\n.*)*');
                    let messageMatches = error.message.match(regExpMessage);

                    // DEBUG: console.log('############ LINE', messageMatches);

                    if (messageMatches) {
                        line = messageMatches[1];
                    }
                } else {
                    let regExpMessage = new RegExp('^.*:([0-9]+)\n','i');
                    let messageMatches = error.message.match(regExpMessage);

                    // DEBUG: console.log('############ LINE', messageMatches);

                    if (messageMatches) {
                        line = messageMatches[1];
                    }
                }
            }

            // Compose notification parts

            let title = `PUG ERROR${ line ? ' — LINE ' + line : '' }`;
            let message = `${path}\n${error.msg ? error.msg: ''}`;

            return { icon:false, title:title, message:message };
        }))
        .pipe(gulp.dest( process.env.DEST  ));
}
