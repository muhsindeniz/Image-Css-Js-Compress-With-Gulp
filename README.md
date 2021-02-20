# gulp-module-packed-functions
In this sample project, I explained how you can package the modules in your web project and how you can do the site optimization with Gulp.

# Gulp kurulumu için:
    - git init
    - npm install gulp-cli -g
    - npm install gulp -D

Önce gulp parametrelerini ekliyoruz. 
    - const gulp = require('gulp');
    - const {src, series, parallel, dest, watch} = require('gulp');

# Imagemin eklemek için: 
    - npm install --save-dev gulp-imagemin --force

Bu şekilde de import ediyoruz:
    const imaagemin = require('gulp-imagemin');
    
    function imgTask(){
        return src('assets/img/**/*').pipe(imaagemin()).pipe(gulp.dest('assets/dist/img'));
    }

Fonksiyonu tanımlamak için:
    - exports.imgTask = imgTask;

Çalıştırmak için:
    - gulp imgTask

# Js minify eklemek için: 
    - npm install --save-dev gulp-sourcemaps gulp-terser gulp-concat --force

Bu şekilde de import ediyoruz:

    const jsPath = 'assets/js/*.js';
    
    const concat = require('gulp-concat');
    const terser = require('gulp-terser');
    const sourcemaps = require('gulp-sourcemaps');
    
    function jsTask(){
        return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('assets/dist/js'));
    }

Fonksiyonu tanımlamak için:
    - exports.imgTask = jsTask;

Çalıştırmak için:
    - gulp jsTask

# Css minify eklemek için:
    - npm install --save-dev gulp-postcss cssnano autoprefixer --force

Bu şekilde de import ediyoruz:
    
    const cssPath = 'assets/css/*.css';

    const postcss = require('gulp-postcss');
    const cssnano = require('cssnano');
    const autoprefixer = require('autoprefixer');
    
    function cssTask(){
        return src(cssPath)
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('assets/dist/css'))
    }

Fonksiyonu tanımlamak için:
    - exports.imgTask = cssTask;

Çalıştırmak için:
    - gulp cssTask

# Fonksiyonları sırayla çalıştırmak için:

    exports.default = parallel(imgTask, jsTask, cssTask);
    
Fonksiyonları izlemek ve bir değişiklik olduğunda otomatik olarak Gulp ı başlatmak için:

    function watchTask(){
        watch([cssPath, jsPath], {interval: 1000}, parallel(cssTask, jsTask));
    }
    
    exports.default = series(parallel(imgTask, jsTask, cssTask), watchTask);
    
Çalıştırmak için:
    - Gulp

Umarım yararlı olmuştur. Hepinize iyi çalışmalar. :)
