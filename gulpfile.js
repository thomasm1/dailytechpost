const { src, dest, parallel } = require('gulp'); 
const sass   = require('gulp-sass'); 
const minifyCSS = require('gulp-csso');
const imageMin = require('gulp-imagemin'); 
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
 
function css() {
  return src('client/src/app.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('client/dist'))
    .pipe(browserSync.stream())
}
 
 // Image minifier from src -> dist
function img() {
    return src('client/src/img/*')
    .pipe(imageMin())
    .pipe(dest('client/dist/img', { sourcemaps: true }))
}
   
function js() {
  return src('client/src/js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('client/dist', { sourcemaps: true }))
}

exports.img = img;
exports.js = js;
exports.css = css; 
exports.default = parallel(img, css, js);