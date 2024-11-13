        
import gulp from 'gulp';
const { src, dest, parallel, series, watch } = gulp;

import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import gulp_sass from 'gulp-sass';
import og_sass from 'sass';
const sass = gulp_sass(og_sass);
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import concat from 'gulp-concat';
import clean from 'gulp-clean';
import imagemin from 'gulp-imagemin';
import changed from 'gulp-changed';
import browsersync1 from 'browser-sync';
const browsersync = browsersync1.create();

// Clean assets
function clear() {

  return src('./assets/*', {
      read: false
    })
      .pipe(clean());

}

// JS function 
function js() {

  const source = './src/js/*.js';

  return src(source)
    .pipe(changed(source))
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(dest('./assets/js/'))
    .pipe(browsersync.stream());
    
}

// CSS function 
function css() {

  const source = './src/scss/main.scss';

  return src(source)
    .pipe(changed(source))
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['> 1%', 'last 2 versions'],
      cascade: false
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(dest('./assets/css/'))
    .pipe(browsersync.stream());

}

// Optimize images
function img() {

  return src('./src/img/*')
    .pipe(imagemin())
    .pipe(dest('./assets/img'));

}

// html
function html() {

  const source = './index.html';

  return src(source)
    .pipe(changed(source))
    .pipe(dest('./assets/html/'))
    .pipe(browsersync.stream());

}

// Watch files
function watchFiles() {

  watch('./src/scss/*', css);
  watch('./src/js/*', js);
  watch('./src/img/*', img);
  watch('./index.html', html);

}

// BrowserSync
function browserSync() {

  browsersync.init({
    server: {
      baseDir: './'
    },
    port: 3000
  });

}

// Tasks to define the execution of the functions simultaneously or in series
// exports.watch = parallel(watchFiles, browserSync);
// exports.default = series(clear, parallel(js, css, img));
export const watch1 = parallel(watchFiles, browserSync);
export default series(clear, parallel(js, css, img, html));
  