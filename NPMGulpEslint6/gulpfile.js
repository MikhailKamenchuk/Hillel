var gulp 		 = require('gulp'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	concatCss    = require('gulp-concat-css'),
	cssnano 	 = require('gulp-cssnano'),
	rename		 = require('gulp-rename'),
	del 		 = require('del'),
	uglifyjs	 = require('gulp-uglify'),
	uglifycss	 = require('gulp-uglifycss'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin     = require('gulp-imagemin'),
	pngquant  	 = require('imagemin-pngquant'),
	eslint       = require('gulp-eslint'),
	babel 		 = require('gulp-babel');

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('css', function () {
  return gulp.src('app/css/*.css')
  	.pipe(concatCss('main-min.css'))
  	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scripts', function () {
	return gulp.src('app/js/*.es6')
		.pipe(concat('main-min.js'))
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(uglifyjs())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced:true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
})

gulp.task('watch', ['browser-sync', 'css', 'scripts', 'img'], function() {
	gulp.watch('app/css/*.css'); 
	gulp.watch('app/*.html'); 
	gulp.watch('app/js/*.js');   
});

gulp.task('build', ['clean', 'img', 'css', 'scripts'], function() {

	var buildCss = gulp.src('app/css/main-min.css')
	.pipe(gulp.dest('dist/css'))

	var buildJs = gulp.src('app/js/main-min.js')
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') 
		.pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);

