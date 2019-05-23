const gulp = require("gulp"),
  sass = require("gulp-sass"),
  livereload = require("gulp-livereload");

gulp.task("styles", function() {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css/"))
    .pipe(livereload());
});

gulp.task("default", function() {
  livereload.listen();
  return gulp.watch("./sass/*.scss", gulp.series("styles"));
});
