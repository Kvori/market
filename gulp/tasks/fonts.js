import ttf2woff2 from "gulp-ttf2woff2";
import { browserSyncCreate } from './browserSync.js';

export const fonts = () => {
    return app.gulp.src(app.path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(browserSyncCreate.stream())
}