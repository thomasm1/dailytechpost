const { src, dest, parallel } = require('gulp'); 
const sass   = require('gulp-sass'); 
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
 
function css() {
  return src('client/public/src/app.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('client/public/dist'))
}
 
function js() {
  return src('client/public/src/js/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(dest('dist', { sourcemaps: true }))
}

exports.js = js;
exports.css = css; 
exports.default = parallel(css, js);