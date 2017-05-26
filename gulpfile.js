const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify-css');

const path = './public/stylesheets/*.css';

gulp.task('concat',function() {
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

gulp.task('_watch', function() {
  gulp.watch(path,['minify'])
  .on('change', function (event) {console.log('Css changed')});
})

gulp.task('watch',['_watch','concat','minify']);
gulp.task('default',['concat','minify']);
