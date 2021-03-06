var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var paths = {
  src: ['src/components/**/*.js', '!client/**/*.js'],
};


// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);

// Production build
gulp.task("build", ["webpack:build"]);

gulp.task('test_mocha', ['build_test'],function () {
    var mochaPhantomJS = require('gulp-mocha-phantomjs');
    return gulp
    .src('spec/runner.html')
    .pipe(mochaPhantomJS({
        reporter:'spec',
        phantomjs: {
            viewportSize: {
                width: 1024,
                height: 768
            },
            useColors:true
        }
    }));
});

gulp.task("webpack:build", function(callback) {
  var webpackConfig = require("./webpack.rails.config.js");
  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("build_test", function(callback) {
  var webpackConfig = require("./webpack.mocha.config.js");
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;
  myConfig.entry = ['./spec/test_entry'],
  // run webpack
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("build_test", err);
    gutil.log("[build_test]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('watcher_build_test',function () {
  gulp.watch('spec/**/*_spec.js', ['test_mocha'])
});

gulp.task("webpack-dev-server", function(callback) {
  // modify some webpack config options
  var webpackHotConfig = require("./webpack.hot.config.js");
  var myConfig = Object.create(webpackHotConfig);
  myConfig.devtool = "eval";
  myConfig.debug = true;

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(myConfig), {
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/");
  });
});
