const gulp = require('gulp');
const plumber = require('gulp-plumber')
const browserSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const imagemin = require("gulp-imagemin");
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const imageminJpegtran = require('imagemin-jpegtran');
const pngquant = require('imagemin-pngquant');
const cssmin = require('gulp-cssmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');



sass.compiler = require('node-sass');

gulp.task('serve', function(){
  browserSync.init({
      server: {
          baseDir: "./build"
      }
  })
});



gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build/'))
  .pipe(browserSync.reload({stream: true}));
});
const styles = [
  "node_modules/normalize.css/normalize.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/sass/*.scss",
  "src/sass/components/lightslider.css"
];

gulp.task('images', function(){
  return gulp.src('src/img/**/*.{png,jpg}')
  .pipe(imagemin([
      imageminJpegtran({progressive: true}),
      imageminJpegRecompress({
          loops: 5,
          min: 65,
          max: 70,
          quality: [0.7, 0.8]
      }),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: [0.7, 0.8], speed: 5})
  ]))
  .pipe(gulp.dest('build/img'))
});
gulp.task('allimg', function(){
  return gulp.src('src/img/**/*.{png,jpg,svg}')
  .pipe(gulp.dest('build/img'))
  .pipe(browserSync.reload({stream: true}));
});
gulp.task('sass', function () {
  return gulp.src(styles)
      .pipe(plumber())
      .pipe(sass())
      .pipe(cssmin())
      .pipe(autoprefixer([
          'last 15 versions',
          '> 1%',
          'ie 8', 
          'ie 7'
          ], 
         { 
          cascade: true
       }))
      .pipe(concat(('style.css')))
      .pipe(gulp.dest('build/css'))
      .pipe(browserSync.reload({stream: true}));
});
gulp.task('js', function(){
  return gulp.src('src/js/**/*.js')
  .pipe(gulp.dest('build/js'))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function(){
  gulp.watch('src/*.html', gulp.series('html')),
  gulp.watch(styles, gulp.series("sass"), browserSync.reload),
  gulp.watch('src/js/**/*.js', gulp.series('js')),
  gulp.watch("src/img/**/*.{png,jpg}", gulp.series("images"))
  gulp.watch("src/img/**/*.{png,jpg,svg}", gulp.series("allimg"))
});

gulp.task('default', gulp.series(
  gulp.parallel('html', 'sass', 'js','images', 'allimg'),
  gulp.parallel('watch', 'serve' )
));