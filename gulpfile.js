import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { browserSyncCreate } from './gulp/tasks/browserSync.js';

global.app = {
    path: path,
    gulp: gulp,
}

import { fonts } from './gulp/tasks/fonts.js';
import { html } from './gulp/tasks/html.js';
import { buildStyles } from './gulp/tasks/sass.js';
import { copyCSS } from './gulp/tasks/css.js';
import { reset } from './gulp/tasks/reset.js';
import { images } from './gulp/tasks/img.js';
import { svg } from './gulp/tasks/svg.js';

function watcher() {
    gulp.watch(path.watch.fonts, fonts);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.sass, buildStyles);
    gulp.watch(path.watch.img, images);
    gulp.watch(path.watch.svg, svg)

    browserSyncCreate.init({
        server: {
            baseDir: 'dist'
        }
    })
}

const mainTasks = gulp.parallel(fonts, html, buildStyles, copyCSS, images, svg)

const dev = gulp.series(reset, mainTasks, watcher)
const build = gulp.series(reset, mainTasks)


gulp.task('dev', dev)
gulp.task('build', build)
