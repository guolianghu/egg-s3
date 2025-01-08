'use strict';

const assert = require('assert');
const { S3Client: S3, ListBucketsCommand } = require('@aws-sdk/client-s3');

module.exports = app => {
  app.addSingleton('s3', createOneClient);
};

function createOneClient(config, app) {
  const s3 = new S3(config);


  app.beforeStart(async () => {
    // await s3.listBuckets();
    const command = new ListBucketsCommand({});
    const response = await s3.send(command);
    // response.Buckets.forEach((bucket) => {
    //   console.log(`Bucket Name: ${bucket.Name}, Created On: ${bucket.CreationDate}`);
    // });
    app.coreLogger.info('[egg-aws-s3] init instance success');
  });

  return s3;
}
