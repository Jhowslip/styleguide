'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var lint = require('gulp-sass-lint');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

var paths = {
    modules: './modules',
    sassFiles: 'modules/**/*.s+(a|c)ss',
    dist: './dist',
    docs: './docs'
};

gulp.task('default', ['serve']);

gulp.task('dist', ['sass']);

gulp.task('serve', ['sass:lint', 'sass:docs', 'sass:watch'], function () {

    browserSync.init({
        server: './docs',
    });

    gulp.watch("docs/*.css").on('change', browserSync.reload);
    gulp.watch("docs/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return compileSass(paths.dist);
});

gulp.task('sass:lint', function () {
    return gulp.src(paths.sassFiles)
        .pipe(lint())
        .pipe(lint.format())
        .pipe(lint.failOnError())
});

gulp.task('sass:docs', function () {
    return compileSass(paths.docs);
});

gulp.task('sass:watch', function () {
    gulp.watch(paths.sassFiles, ['sass:lint', 'sass:docs']);
});

function compileSass(dest) {
    var unminifiedTask =
        gulp.src('./styleguide.scss')
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(gulp.dest(dest))
            .pipe(browserSync.stream());

    var minifiedTask =
        gulp.src('./styleguide.scss')
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(rename('styleguide.min.css'))
            .pipe(gulp.dest(dest))
            .pipe(browserSync.stream());

    return [unminifiedTask, minifiedTask];
}