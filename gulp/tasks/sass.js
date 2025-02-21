import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import GulpCleanCss from 'gulp-clean-css';
import { browserSyncCreate } from './browserSync.js';

const sass = gulpSass(dartSass);

export const buildStyles = () => {
    return app.gulp.src(app.path.src.sass)
        // .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(GulpCleanCss({
            level: 2
        }))
        .pipe(app.gulp.dest(app.path.build.sass))
        .pipe(browserSyncCreate.stream())
};