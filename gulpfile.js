const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');

gulp.task('sass', function () {
  return gulp.src('source/**/*.scss') // Remplacez par votre chemin SCSS
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('output')); // Remplacez par votre chemin de sortie
});

// Définition de la tâche par défaut
gulp.task('default', gulp.series('sass', function () {
  // Le code de votre tâche par défaut va ici
}));
