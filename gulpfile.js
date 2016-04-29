'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');

var paths = {
  scripts: [
    './js/*.js'
  ],
  styles: [
    './styles/*.css'
  ]
};

gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', ['watch']);
