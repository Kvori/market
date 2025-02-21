import autoprefixer from 'gulp-autoprefixer';
import GulpCleanCss from 'gulp-clean-css';
import { browserSyncCreate } from './browserSync.js';

export const copyCSS = () => {
    return app.gulp.src(app.path.src.css)
        // .pipe(sourcemaps.init())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(GulpCleanCss({
            level: 2
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(browserSyncCreate.stream())
};