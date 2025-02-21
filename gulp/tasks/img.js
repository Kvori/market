import image from 'gulp-image';
import { browserSyncCreate } from './browserSync.js';

export const images = () => {
    return app.gulp.src(app.path.src.img)
    .pipe(image())
    .pipe(app.gulp.dest(app.path.build.img))
    .pipe(browserSyncCreate.stream())
  }
  