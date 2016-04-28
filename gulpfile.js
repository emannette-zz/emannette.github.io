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


gulp.task('lights', function() {
  return gulp.src('scss/lights.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('projects', function() {
  return gulp.src('scss/projects.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('terrain', function() {
  return gulp.src('scss/terrain.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('main', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./scss/*.scss', ['lights', 'projects', 'terrain', 'main']);
});

gulp.task('default', ['sass:watch']);
