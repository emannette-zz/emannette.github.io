'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint');

var paths = {
  scripts: [
    './js/*.js'
  ],
  styles: [
    './styles/*.css'
  ]
};

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles,  ['styles'] );
  gulp.watch(paths.scripts, ['lint']   );
});

gulp.task('default', ['watch']);
