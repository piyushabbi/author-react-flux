'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),  //Runs a local dev server
    open = require('gulp-open'),    //Open a URL in a web browser
    concat = require('gulp-concat');

var browserify = require('browserify'), //Bundles JS
    reactify = require('reactify'), //Transforms React JSX to JS
    source = require('vinyl-source-stream');    //Use conventional text streams with Gulp

//Config Obj
var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            './src/css/*.css'
        ],
        images: './src/images/*',
        mainJs: './src/main.js',
        dist: './dist',
    }
};

// Start a local development server
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});

//Open Task that runs connect task first
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.devBaseUrl + ':' + config.port + '/'
        }));
});

//html piped to dist and reloading
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

//JS Task using browserify
gulp.task('js', function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()   //Combine all js files into one
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/script'))
        .pipe(connect.reload());
});

//CSS Task; no live reload for now
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
});

//Images Task
gulp.task('images', function () {
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());

    //publish favicon
    gulp.src('./src/favicon.ico')
        .pipe(gulp.dest(config.paths.dist));
});

//Watch task for any changes
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.css, ['css']);
});

//Default task
gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch']);
