var gulp 		 = require('gulp'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	concatCss    = require('gulp-concat-css'),
	cssnano 	 = require('gulp-cssnano'),
	del 		 = require('del'),
	uglifyjs	 = require('gulp-uglifyjs'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin     = require('gulp-imagemin'),
	pngquant  	 = require('imagemin-pngquant'),
	eslint       = require('gulp-eslint'),
	babel 		 = require('gulp-babel');

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('css',['clean'], function () {
  return gulp.src('app/css/*.css')
  	.pipe(concatCss('main-min.css'))
  	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
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

gulp.task('scripts',['css'], function () {
	return gulp.src('app/js/*.js')
		.pipe(concat('main-min.js'))
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(uglifyjs())
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img',['scripts'], function(){
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced:true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
})

gulp.task('build', ['clean', 'img', 'css', 'scripts'], function() {

	var buildHtml = gulp.src('app/*.html') 
		.pipe(gulp.dest('dist'));

});

gulp.task('watch', ['img', 'browser-sync', 'css', 'scripts', 'build'], function() {
	gulp.watch('app/css/*.css'); 
	gulp.watch('app/*.html'); 
	gulp.watch('app/js/*.js');   
});

gulp.task('lint', function () {
    return gulp.src('app/js/*.js')
        .pipe(eslint({
            "env": {
                "es6": true,
                "browser": true
            },
            "extends": "eslint:recommended",
            "rules": {
            	"semi": ["error", "always"]
            }
        }))
        .pipe(eslint.formatEach('compact', process.stderr))
        .pipe(eslint.failAfterError());
});

gulp.task('run', ['watch']);

