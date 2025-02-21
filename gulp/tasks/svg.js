import { browserSyncCreate } from './browserSync.js';

export const svg = () => {
    return app.gulp.src(app.path.src.svg)
    .pipe(app.gulp.dest(app.path.build.svg))
    .pipe(browserSyncCreate.stream())
  }
  