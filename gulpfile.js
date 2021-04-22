const { src, dest, watch, parallel, series } = require('gulp');

const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const uglify        = require('gulp-uglify-es').default;
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const del           = require('del');
var sourcemaps      = require('gulp-sourcemaps');

function styles() {
    return src('sass/style.sass')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(concat('style.min.css'))
            .pipe(autoprefixer({
                overrideBrowserslist: ['last 15 version'],
                grid: true,
                cascade: false
            }))
            .pipe(sourcemaps.write())
            .pipe(dest('.'))
            .pipe(browserSync.stream())
}

function watching() {
    watch(['sass/*.sass'], styles);
}

exports.styles = styles;
exports.watching = watching;

exports.default = parallel(watching);