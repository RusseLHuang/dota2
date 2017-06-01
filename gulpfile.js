const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify-css');
const sass = require('gulp-sass');

const scss_path = './public/stylesheets/scss/*.scss';
const path = './public/stylesheets/css/*.css';

gulp.task('concat',['sass'],function() {
  return gulp.src(path)
  .pipe(concat('all.min.css'))
  .pipe(gulp.dest('./public/stylesheets/'))
})

gulp.task('minify',function() {
  return gulp.src('./public/stylesheets/all.min.css')
  .pipe(minify({
    keepBreaks : true
  }))
  .pipe(gulp.dest('./public/stylesheets/'))
})

gulp.task('sass',function() {
  return gulp.src(scss_path)
  .pipe(sass.sync().on('error',sass.logError))
  .pipe(gulp.dest('./public/stylesheets/css/'))
})

gulp.task('_watch', function() {
  gulp.watch(scss_path,['sass','concat','minify'])
  .on('change', function (event) {console.log('Css changed')});
})

gulp.task('watch',['_watch','sass','concat','minify']);
gulp.task('default',['sass','concat','minify']);
