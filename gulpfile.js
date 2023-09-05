const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('source/**/*.scss') // Remplacez par votre chemin SCSS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('output')); // Remplacez par votre chemin de sortie
});