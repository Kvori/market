import fileinclude from 'gulp-file-include';
import { browserSyncCreate } from './browserSync.js';

export const html = () => {
    return app.gulp.src(app.path.src.html)
    .pipe(fileinclude())
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(browserSyncCreate.stream())
}