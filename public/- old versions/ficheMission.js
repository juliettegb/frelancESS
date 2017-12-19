var React    = require('react');
var ReactDOM = require('react-dom');
var signup = require('signup');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

class FicheMission extends React.Component {

  constructor() {
   super();
  }

  render() {
    return (

      signup.task('copy', function() {
        signup.src([
            'node_modules/bootstrap/dist/**/*',
            '!**/npm.js',
            '!**/bootstrap-theme.*',
            '!**/*.map'
          ])
          .pipe(signup.dest('./vendor/bootstrap'))

        signup.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
          .pipe(signup.dest('vendor/jquery'))
      })

      signup.task('default', ['copy']);

      signup.task('browserSync', function() {
        browserSync.init({
          server: {
            baseDir: ''
          },
        })
      })

      signup.task('dev', ['browserSync'], function() {
        signup.watch('css/*.css', browserSync.reload);
        signup.watch('*.html', browserSync.reload);
      });


    );
  }
}

module.exports = FicheMission;
