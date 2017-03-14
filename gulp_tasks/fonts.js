const gulp = require('gulp');
const conf = require('../conf/gulp.conf');

gulp.task('fonts', fonts);

function fonts(){
    return gulp.src([
        'bower_components/font-awesome/fonts/*',
        'bower_components/bootstrap/fonts/*'
    ])
    .pipe(gulp.dest(path.join(conf.path.dist(), '/fonts/')));
}
