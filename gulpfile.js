var gulp = require("gulp");
var config = require("./config")(); //import config file.
var liveServer = require("gulp-live-server");
var browserSync = require("browser-sync"); //testing porpuses.
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var less = require("gulp-less");
var path = require("path");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");


//import libs
gulp.task("imports", function(){
	gulp.src([
		"./node_modules/jquery/dist/jquery.min.js", //Jquery
		"./node_modules/toastr/toastr.js", //Toastr
		"./node_modules/angular/angular.js", //Angular
		"./node_modules/requirejs/require.js", //RequireJS
		"./node_modules/angular-route/angular-route.js" //Angular Route
	])
	.pipe(gulp.dest('./public/js'));
});

//import libs folder.
gulp.task("libs", function(){
	gulp.src([
		"./src/libs/*", //Import services for RequireJS
	])
	.pipe(gulp.dest('./public/js/libs'));
});

gulp.task("bundle", ["imports", "libs"], function(){
	return gulp.src([
		"./src/*.js", 
		"./src/controllers/*.js", 
		"./src/services/*.js", 
		"./src/components/**/*.js"])
	.pipe(uglify())
	.pipe(concat("app.js"))
	.pipe(gulp.dest("./public/js"));
});

//less compiler
gulp.task("less", function(){
	return gulp.src(config.devPaths.less)
	.pipe(less({
		paths:[
			path.join(__dirname, "less", "includes"),
			"./node_modules/bootstrap-less",
			"./node_modules/toastr"
		]
	}))
	.pipe(minifyCSS())
    .pipe(rename('global.min.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
	.pipe(gulp.dest(config.publicPaths.css));
});

gulp.task('copy-views', function() {
    gulp.src('./src/views/**/*')
    .pipe(gulp.dest('./public/views'));
});

gulp.task('copy-html',  ["copy-views"], function() {
    gulp.src('./src/index.html')
    .pipe(gulp.dest('./public'));
});

//running server task.
gulp.task("live-server", function(){
	var server = liveServer("./server.js");
	server.start();
});

gulp.task("sync", ["live-server", "copy-html", "bundle", "less"], function(){
	browserSync.init(null, {
		proxy:"http://localhost:"+config.port,
		port:9001
	});
});

//Watch for changes
gulp.task("watch", function(){
	gulp.watch("./src/**/*.js", ['bundle']);
	gulp.watch("./src/**/*.html", ['copy-html']);
	gulp.watch(config.devPaths.less, ['less']); 
	//"Watch" every html file, and if any change, run 'html', 'js' task.
});

gulp.task('default', ['sync', "watch"]);