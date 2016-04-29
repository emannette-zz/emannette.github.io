'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon');

var paths = {
  scripts: [
    './js/*.js'
  ],
  styles: [
    './styles/*.css'
  ]
};

var nodemonConfig = {
  ext: 'html js css',
  ignore: ['node_modules']
};

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon(nodemonConfig)
    .on('start', function() {
      if (!called) {
        called = true;
        cb();
      }
    })
    .on('restart', function() {
      setTimeout(function() {
        reload({ stream: false });
      }, 1000);
    });
});

gulp.task('browser-sync', ['nodemon'], function(done) {
  browserSync({
    proxy: 'localhost:3000',
    port: 5000,
    files:  ['.{js, css}'],
    notify: true
  }, done);
});

gulp.task('lint', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
  return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles,  ['sass'] );
  gulp.watch(paths.scripts, ['lint']   );
});

gulp.task('default', ['watch']);
