const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const babel = require('babel-core/register');

const paths = {
	html: 'index.html',
	scripts: './src/**/*.js',
	sass: './styles/**/*.scss',
	build: './build'
};

function compile() {
	const bundler = watchify(browserify('./src/app.js', {debug: true})
					.transform('babelify', {presets: ['react', 'es2015']}));

	bundler.bundle()
		.on('error', (err) => {
			console.error(err);
			this.emit('end');
		})
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.build));
}

function compileDiscoverer() {
	const bundler = watchify(browserify('./src/discoverer.js', {debug: true})
		.transform('babelify', {presets: ['react', 'es2015']}));

	bundler.bundle()
		.on('error', (err) => {
			console.error(err);
			this.emit('end');
		})
		.pipe(source('discoverer-bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.build));
}

gulp.task('discoverer', () => compileDiscoverer());
gulp.task('scripts', () => compile());

gulp.task('clean', () => del(['build']));

gulp.task('sass', () => {
	gulp.src(paths.sass)
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('bundle.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.build));
});

gulp.task('watch', () => {
	gulp.watch(paths.scripts, ['discoverer, scripts']);
	gulp.watch(paths.sass, ['sass']);
});
gulp.task('default', ['clean', 'discoverer', 'scripts', 'sass', 'watch']);