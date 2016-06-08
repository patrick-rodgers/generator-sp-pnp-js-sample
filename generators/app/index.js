'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var extend = require('deep-extend');

module.exports = yeoman.Base.extend({

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the rad ' + chalk.red('sp-pnp-js sample') + ' generator!'
    ));
  },

  writing: function () {

    // add entries to package.json
    var pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    extend(pkg, {
      dependencies: {
        "jquery": "^2.2.4",
        "sp-pnp-js": "1.0.0"
      },
      devDependencies: {
        "gulp": "^3.9.1",
        "gulp-tslint": "^4.3.2",
        "gulp-typescript": "^2.11.0",
        "ts-loader": "^0.8.2",
        "tslint": "^3.4.0",
        "typescript": "^1.8.0",
        "typings": "^1.0.4",
        "webpack-dev-server": "^1.14.1",
        "webpack-stream": "^3.2.0"
      }
    });

    this.fs.writeJSON(this.destinationPath('package.json'), pkg);

    // copy files
    this.fs.copy(
      this.templatePath("**/*.*"),
      this.destinationPath()
    );
  },

  install: function () {
    this.installDependencies({ bower: false });
  },

  end: function() {
    this.log(chalk.green("Installing Typings..."));
    this.spawnCommand("typings", ["install"]);

    this.log(chalk.green("Installing Typings..."));
  }
});
