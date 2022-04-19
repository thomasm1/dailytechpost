import pkg from 'gulp';
const { src, dest } = pkg; 
import sass   from 'gulp-sass'; 
import minifyCSS from 'gulp-csso';
import imageMin from 'gulp-imagemin'; 
import concat from 'gulp-concat';
 
 
function css() {
  return src('client/src/app.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest('client/dist')) 
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
export default () => src('input/*.js')
.pipe(babel())
.pipe(dest('output/'))


// exports.img = img;
// exports.js = js;
// exports.css = css; 
// exports.default = parallel(img, css, js);