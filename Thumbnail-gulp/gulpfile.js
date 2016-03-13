var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function() {
//code written here compiles all jsx code in the src and concats
//them to javascript
return gulp.src('src/**')
//converts jsk to javascript
.pipe(react())
.pipe(concat('application.js'))
.pipe(gulp.dest('./'))

});