'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    tinylr;

var paths = {
  scripts: [
    './js/*.js'
  ],
  styles: [
    './scss/app.scss'
  ],
  html: [
    './*.html'
  ],
  css: [
    './styles/*.css'
  ]
};

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({
    port: 35729
  }));
  app.use(express.static(__dirname));
  app.listen(3000, '0.0.0.0')
});

gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

var notifyLiveReload = function(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

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
  gulp.watch('./scss/_partials/*.scss', ['sass']);
  gulp.watch(paths.styles,  ['sass'] );
  gulp.watch(paths.scripts, ['lint'] );
  gulp.watch(paths.html, notifyLiveReload);
  gulp.watch(paths.css,  notifyLiveReload);

});

gulp.task('default', ['express', 'livereload', 'watch']);
