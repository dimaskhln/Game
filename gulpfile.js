'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
  return gulp.src('src/pages/*.pug').pipe(pug()).pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
  return gulp.src('src/styles/*.scss').pipe(sass()).pipe(gulp.dest('build'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
