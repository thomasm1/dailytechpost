
const babel = require('babel-core');
//
const gulp        = require('gulp');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin'); 
const sass        = require('gulp-sass');
const uglify = require('gulp-uglify');
//
const browserSync = require('browser-sync').create();

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
   // return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    // return gulp.src(['src/scss/bootstrap.css', 'src/scss/*.css','src/scss/*.scss'])
      return gulp.src(['src/scss/bootstrap.css', 'src/scss/*.css','src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

// Copy All HTML files
gulp.task('copyHtml', function(){
    gulp.src('/*.html')
        .pipe(gulp.dest('dist/'));
  });
  
// Optimize img
gulp.task('imageMin', () =>
	gulp.src('src/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
); 
 
// Watch Sass & Serve
gulp.task('serve', ['sass'], function() { 
    browserSync.init({
        server: "./"  
    });

   // gulp.watch('dist/js/*.js', ['wjs']);
  //  gulp.watch('src/js/*.js', ['js']);
    gulp.watch(['src/img/*.jpg', 'src/img/*.PNG', 'src/img/*.png'], ['imageMin']);
    gulp.watch(['src/scss/*.css', 'src/scss/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Move Fonts to src/fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
})

// Move Font Awesome CSS to src/css
gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
    .pipe(gulp.dest('dist/css'))
})

gulp.task('default', [ 'imageMin','serve', 'fa', 'fonts']);


/*  webpack doing this app.js -->app.bundle.js
// Move JS Files to src/js
gulp.task('js', function() {
    return gulp.src(['src/js/bootstrap.js','src/js/*.js'])
  //  .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task('wjs', function() {
    return gulp.src('dist/js/*.js')
  //  .pipe(uglify())
    
        .pipe(browserSync.stream());
});
*/