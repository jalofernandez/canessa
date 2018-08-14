/*
 * Dependencias
 */
   var gulp = require('gulp'),
     concat = require('gulp-concat'),
     uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
   cleanCSS = require('gulp-clean-css'),
   imagemin = require('gulp-imagemin'),
gulpIgnore  = require('gulp-ignore'),
       less = require('gulp-less'),
       path = require('path'),
        pug = require('gulp-pug'),
       data = require('gulp-data'),
         fs = require('fs'),
    sitemap = require('gulp-sitemap'),
 sourcemaps = require('gulp-sourcemaps'),
                 babel = require('gulp-babel'),
          autoprefixer = require('gulp-autoprefixer'),
        LessAutoprefix = require('less-plugin-autoprefix'),
      imageminPngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress'),
                   del = require('del');

// we need to init "autoprefix" less plugin
var lessAutoprefix = new LessAutoprefix({
  browsers: ['last 2 versions']
});

/*
 * Task 'deploy' configuration: last step just before publish (compile all files & prepare to push it all!)
 */
gulp.task('default', ['clean', 'img', 'pug', 'js', 'css', 'sitemap'], function(){
  console.log('Gulpjs task by default is running...');
});

/*
 * Configuración de la tarea 'js' --> gulp-concat + gulp-uglify (gulp js)
 * TODO: remove the following code (old task) asap!
gulp.task('js', function () {
  gulp.src('js/*.js')
  .pipe(concat('scripts-min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js'))
});
*/
// Gulpjs Task to compile (JS) modal dialogs dependencies
gulp.task('js', function () {
    console.log('JS concant and minify task is running...');
    gulp.src(['./js/resources/jquery.min.js', './js/resources/materialize.min.js', './js/canessa.js'])
        //.pipe(sourcemaps.init()) // sourcemaps here not usefull (more heavy files)
        //.pipe(babel({presets: ['es2015']})) // not apply "babel" cause broke Material & custom scripts
        .pipe(uglify())
        .pipe(concat('scripts.min.js'))
        //.pipe(sourcemaps.write()) // sourcemaps here not usefull (more heavy files)
        .pipe(gulp.dest('./public/js'))
});

/*
 * Configuración de la tarea 'less' --> gulp-less (gulp less)
 */
gulp.task('less', function () {
    return gulp.src('./less/**/[^_]*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'));
});

/*
 * Configuración de la tarea 'css' --> gulp-clean-css (gulp css)
 */
gulp.task('css', function() {
    console.log('Soy la tarea de CSS: unifico, limpio y doy detalles');
    return gulp.src(['css/font-awesome.min.css','css/materialize.custom.css','css/styles.css'])
        //.pipe(sourcemaps.init()) // sourcemaps here not usefull (more heavy files)
        .pipe(autoprefixer())
        .pipe(concat('main.min.css'))
        .pipe(cleanCSS({debug: true}, (details) => {
          console.log(`${details.name}: ${details.stats.originalSize}`);
          console.log(`${details.name}: ${details.stats.minifiedSize}`);
        }))
        //.pipe(sourcemaps.write()) // sourcemaps here not usefull (more heavy files)
        .pipe(gulp.dest('./public/css'));
});

/*
 * Configuración de la tarea 'img' --> gulp-imagemin (gulp img)
 */
gulp.task('img', function () {
    console.log('Images task is running...');
    return gulp.src('img/**/*.{jpeg,jpg,png,svg,gif}')
        //.pipe(imagemin()) // without plugins
        .pipe(imagemin(
          [
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.optipng(),
            imagemin.svgo(),
            imageminPngquant(),
            imageminJpegRecompress()
          ]
        ))
        .pipe(gulp.dest('./public/img'));
});

/*
 * Configuración de la tarea 'pug' --> gulp-pug (gulp pug)
 */
gulp.task('pug', function() {
  return gulp.src('./templates/*.pug')
      .pipe(data(function(file) {
        return JSON.parse(fs.readFileSync('./locales/lang_es.json'))
      }))
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./public'));
});

/*
 * Configuración de la tarea 'sitemap' --> gulp-sitemap (gulp sitemap)
 */
gulp.task('sitemap', function () {
    gulp.src('public/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: 'https://peluqueriacanessa.com',
            changefreq: 'weekly',
            priority: '1.0'
        }))
        .pipe(gulp.dest('./public'));
});

/*
 * REMOVE files & folders gulp task
 */
gulp.task('clean', function(){
  return del.sync([
    './public/img/',
    './public/js/scripts-min.js',
    './public/css/*.css'
  ]);
});
