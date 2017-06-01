var gulp = require('gulp');
var mcss = require('gulp_mcss');

gulp.task('mcss', () => {
    gulp.src('client/mcss/style.mcss')
        .pipe(mcss({
            pathes: ['./node_modules'],
            importCSS: true,
        }))
        .pipe(gulp.dest('public/dist/css'));
});