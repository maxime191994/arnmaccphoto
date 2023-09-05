const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');

gulp.task('sass', function () {
  return gulp.src('source/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('CCPhoto')); // Modifier le répertoire de destination
});

gulp.task('default', gulp.series('sass', function (done) {
  // Le code de votre tâche par défaut va ici
  
  // Appel de la fonction de rappel pour signaler la fin de la tâche
  done();
}));
