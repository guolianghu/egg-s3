'use strict';
// const assert = require('assert');
const { S3Client: S3, ListBucketsCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
// const { FetchHttpHandler } = require('@smithy/fetch-http-handler');

module.exports = app => {
  app.addSingleton('s3', createOneClient);
};

class S3Client extends S3 {
  async upload(options) {
    const command = new PutObjectCommand(options);
    return this.send(command);
  }
}

function createOneClient(config, app) {
  if (!config.logger) {
    config.logger = app.logger;
  }

  const s3 = new S3Client(config);


  app.beforeStart(async () => {
    // await s3.send(new ListBucketsCommand({}));
    app.coreLogger.info('[egg-aws-s3] init instance success');
  });

  return s3;
}
