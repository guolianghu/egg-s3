'use strict';

const s3 = require('./lib/s3');

module.exports = class {
  constructor(app) {
    this.app = app;
  }

  configDidLoad() {
    s3(this.app);
  }
}
