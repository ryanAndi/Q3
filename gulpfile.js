var gulp = require('gulp');
var child = require('child_process');

gulp.task('run', function() {
    var server = child.spawn('node', ['server/server.js']);
    console.log("App running on port 3000");
});
