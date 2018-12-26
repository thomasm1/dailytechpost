const gulp        = require('gulp');
const concat = require('gulp-concat');
const imageMin = require('gulp-imagemin'); 
const sass        = require('gulp-sass');
const uglify = require('gulp-uglify'); 
const browserSync = require('browser-sync').create();

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
 
      return gulp.src(['client/public/src/app.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("client/public/dist/"))
      //.pipe(browserSync.stream())
        ;
});
 /*
 gulp.task('copyHtml', function(){
    gulp.src('/*.html')
        .pipe(gulp.dest('client/dist/'));
  });
  */
// Optimize img
gulp.task('imageMin', function(){
	gulp.src('client/public/src/img/*')
		.pipe(imageMin())
		.pipe(gulp.dest('client/public/dist/img'));
}); 
 
// Watch Sass & Serve
gulp.task('serve', ['sass'], function() { 
    browserSync.init({
        server: "./client/public/"  
    });

   // gulp.watch('client/dist/js/*.js', ['wjs']);
    gulp.watch('client/public/src/js/*.js', ['js']);
    gulp.watch(['client/public/src/img/*.jpg', 'client/public/src/img/*.PNG', 'client/src/img/*.png'], ['imageMin']);
    gulp.watch(['client/public/src/app.scss','client/public/src/scss/*.css', 'client/public/src/scss/*.scss'], ['sass']).on('change', browserSync.reload);;
    //gulp.watch('client/index.html','client/views/*.html')
});

// Move Fonts to client/src/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*' )
    .pipe(gulp.dest('client/public/dist/fonts'));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('client/public/dist/css'));
});

gulp.task('default', [ 'imageMin', 'sass', 'fa', 'fonts']);
// 'js', 'sass',  'copyHtml'

 
  