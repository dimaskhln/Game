'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
const { series } = require('gulp');

const { watch } = require('gulp');

sass.compiler = require('node-sass');

var pug = require('gulp-pug');

gulp.task('views', function buildHTML() {
  return gulp
    .src('src/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('build'))
    .pipe(livereload());
});

gulp.task('sass', function () {
  return gulp
    .src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('src/pages/**/*.scss', gulp.series('sass'));
  gulp.watch('src/pages/**/*.pug', gulp.series('views'));
});

exports.start = series('watch');
