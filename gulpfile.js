const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

const sassOpts = {
  outputStyle: 'compressed',
  precison: 3,
  errLogToConsole: true
}

gulp.task('sass', () => gulp.src('./public/scss/**/*.scss')
  .pipe(sass(sassOpts).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest('./public/css'))
)

gulp.task('sass:watch', () => {
  gulp.watch('./public/scss/**/*.scss', ['sass']);
})