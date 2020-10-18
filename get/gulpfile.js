const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin");
gulp.task("copy-html", function () {
  return gulp
    .src("*.html")
    .pipe(
      htmlmin({
        removeEmptyAttibutes: true, 
        collapseWhitespace: true, 
      })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});

gulp.task("images", function(){
  return gulp.src("*.{jpg,png,jpeg,gif}")
  .pipe(gulp.dest("dist/images"))
  .pipe(connect.reload());
})
gulp.task("img",function(){
  return gulp.src("./img/*.{jpg,png,jpeg,gif}")
  .pipe(gulp.dest("dist/images"))
  .pipe(connect.reload());
})

gulp.task("scripts", function(){
  return gulp.src(["*.js", "!gulpfile.js"])
  .pipe(gulp.dest("dist/js"))
  .pipe(connect.reload());
})


gulp.task("data", function(){
  return gulp.src(["*.json", "!package.json"])
  .pipe(gulp.dest("dist/data"))
  .pipe(connect.reload());
})


const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sassIndex", function(){
  return gulp.src("./stylesheet/index.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})

gulp.task("sassBanner", function(){
  return gulp.src("./stylesheet/banner.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("banner.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("Common", function(){
  return gulp.src("./stylesheet/common.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("common.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("Index2", function(){
  return gulp.src("./stylesheet/index2.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index2.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("Index3", function(){
  return gulp.src("./stylesheet/index3.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index3.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})
gulp.task("Index4", function(){
  return gulp.src("./stylesheet/index4.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("dist/css"))
  .pipe(minifycss())
  .pipe(rename("index4.min.css"))
  .pipe(gulp.dest("dist/css"))
  .pipe(connect.reload());
})


gulp.task("builder",["Common","img","Index2","Index3","Index4"])
gulp.task("build", ["copy-html", "images", "scripts", "data", "sassIndex", "sassBanner"]);


//监听
gulp.task("watch", function(){
  gulp.watch("*.html", ["copy-html"]);
  gulp.watch("*.{jpg,png}", ["images"]);
  gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
  gulp.watch(["*.json", "!package.json"], ['data']);
  gulp.watch("./stylesheet/index.scss", ["sassIndex"]);
  gulp.watch("./stylesheet/index2.scss", ["Index2"]);
  gulp.watch("./stylesheet/index3.scss", ["Index3"]);
  gulp.watch("./stylesheet/index4.scss", ["Index4"]);
  gulp.watch("./stylesheet/banner.scss", ['sassBanner']);
})


const connect = require("gulp-connect");
gulp.task("server", function(){
  connect.server({
    root: "dist",
    port: 520,  //0-65535
    livereload: true
  })
})


gulp.task("default", ['watch', 'server']);
