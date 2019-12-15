'use strict';

const assert = require('assert');
const S3 = require('aws-sdk/clients/s3');

module.exports = app => {
  app.addSingleton('s3', createOneClient);
};

function createOneClient(config, app) {
  const { accessKeyId, secretAccessKey, endpoint } = config;

  assert(accessKeyId, `[egg-aws-s3] 'accessKeyId: ${accessKeyId}' is required on config`);
  assert(secretAccessKey, `[egg-aws-s3] 'secretAccessKey: ${secretAccessKey}' is required on config`);
  assert(endpoint, `[egg-aws-s3] 'endpoint: ${endpoint}' is required on config`);

  app.coreLogger.info('[egg-aws-s3] connecting %s', endpoint);
  const s3 = new S3(config);

  app.beforeStart(async () => {
    await s3.listBuckets().promise();
    app.coreLogger.info('[egg-aws-s3] init instance success');
  });

  return s3;
}
