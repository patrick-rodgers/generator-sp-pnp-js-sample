'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('example:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      "gulpfile.js",
      "tsconfig.json",
      "tslint.json",
      "typings.json",
      "webpack.config.js",
      "src/app.ts",
      "src/helloworld.ts",
      "src/sp.ts",
      "src/sp2.ts"
    ]);
  });
});
