let gulp = require("gulp");
let sass = require("gulp-sass");
let autoprefixer = require("gulp-autoprefixer");
let browserSync = require("browser-sync").create();
let eslint = require("gulp-eslint");
let jasmineBrowser = require("gulp-jasmine-browser");
// let jasmine = require("gulp-jasmine-phantom");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");

gulp.task("default", function () {
  console.log("gulp running");
  // browserSync.init({
  //   // server: "./",
  //   server: "./dist",
  // });
  // gulp.watch("js/**/*.js", gulp.series(["lint"]));
  // gulp.watch("/sass/**/*.scss", gulp.series(["styles"]));
  // gulp.watch('/index.html', gulp.series(["copy-html"]));
  // gulp.watch('img/*', gulp.series(['copy-images']))
});

// gulp.task('browserWatch', function() {
//   browserSync.init({
//     // server: "./",
//     server: "./dist",
//   });
// })

gulp.task("watchTask", async function () {
  gulp.watch("js/**/*.js", gulp.series(["lint"]));
  gulp.watch("/sass/**/*.scss", gulp.series(["styles"]));
  gulp.watch("/index.html", gulp.series(["copy-html"]));
  // gulp.watch('img/*', gulp.series(['copy-images']))
  gulp.watch("./dist/index.html").on("change", browserSync.reload);
  browserSync.init({
    // server: "./",
    server: "./dist",
  });
});

gulp.task("scripts", async function () {
  gulp.src("js/**/*.js").pipe(concat("all.js")).pipe(gulp.dest("dist/js"));
});

gulp.task("scripts-dist", async function () {
  gulp
    .src("js/**/*.js")
    .pipe(concat("all.js"))
    .pipe(
      uglify().on("error", function (er) {
        console.log(er);
      })
    )
    .pipe(gulp.dest("dist/js"));
});

gulp.task("copy-html", async function () {
  gulp.src("./index.html").pipe(gulp.dest("./dist"));
});

gulp.task("copy-images", async function () {
  gulp.src("img/*").pipe(gulp.dest("./dist/img"));
});

gulp.task("tests", function () {
  return gulp
    .src("tests/spec/extraSpec.js")
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless({ driver: "chrome" }));
});

gulp.task("tests", function () {
  gulp
    .src("tests/spec/extraSpec.js")
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 3001 }));
});

// gulp.task("tests", function () {
//   return gulp
//     .src("tests/spec/extraSpec.js")
//     .pipe(jasmine({ integration: true, vendor: "js/**/*.js" }));
//   // .pipe(jasmineBrowser.specRunner({ console: true }))
//   // .pipe(jasmineBrowser.headless({ drive: "chrome" }));
// });

gulp.task("lint", () => {
  return (
    gulp
      .src(["js/**/*.js"])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError())
  );
});

gulp.task("styles", function () {
  return (
    gulp
      .src("./sass/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      // .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
      .pipe(
        autoprefixer({
          overrideBrowserslist: ["defaults", "maintained node versions"],
        })
      )
      .pipe(gulp.dest("./dist/css"))
      .pipe(gulp.dest("./css"))
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(browserSync.stream())
  );
});

exports.default = gulp.series(
  "styles",
  "lint",
  "copy-html",
  "copy-images",
  "watchTask"
);

// gulp.task(
//   "default",
//   gulp.series("styles", function () {
//     // gulp.watch("sass/**/*.scss", "styles");

//   })
// );

// gulp.task("default", gulp.series("watch"));

// gulp.task("watch", function () {
//   gulp.watch("sass/**/*.scss", gulp.series(["styles"]));
// });

// gulp.task("default", function () {
//   // code for your default task goes here
//   // gulp.watch("./sass/**/*.scss", ["styles"]);
//   console.log("gulp running");
//   // let watcher = gulp.watch("/sass/**/*.scss", ["styles"]);
//   // watcher.on("change", function () {
//   //   console.log("running task");
//   // });
//   return gulp.watch("/sass/**/*.scss", gulp.series(["styles"]));
// });

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
//   console.log("gulp running");
//   console.log("hello gulp");
// }

// exports.default = defaultTask;

/**
 const gulp = require("gulp");

gulp.task("default", function() {
  // code for your default task goes here
});
 */
