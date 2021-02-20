const gulp = require('gulp');
const imaagemin = require('gulp-imagemin');
const {src, series, parallel, dest, watch} = require('gulp');

const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');

const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const jsPath = 'assets/js/*.js';
const cssPath = 'assets/css/*.css';

function imgTask(){
    return src('assets/img/**/*').pipe(imaagemin()).pipe(gulp.dest('assets/dist/img'));
}

function jsTask(){
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('assets/dist/js'));
}

function cssTask(){
    return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('assets/dist/css'))
}

function watchTask(){
    watch([cssPath, jsPath], {interval: 1000}, parallel(cssTask, jsTask));
}

// exports.imgTask = imgTask;
// exports.jsTask = jsTask;
// exports.cssTask = cssTask;
exports.default = series(parallel(imgTask, jsTask, cssTask), watchTask);