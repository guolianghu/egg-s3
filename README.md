# egg-aws-s3

[AWS-S3](https://github.com/aws/aws-sdk-js) plugin for Egg.js

> NOTE: This plugin just for integrate amqplib into Egg.js, more documentation please visit https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@eggplugin/s3.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggplugin/s3
[travis-image]: https://img.shields.io/travis/eggjs/@eggplugin/s3.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/@eggplugin/s3
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/@eggplugin/s3.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/@eggplugin/s3?branch=master
[david-image]: https://img.shields.io/david/eggjs/@eggplugin/s3.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/@eggplugin/s3
[snyk-image]: https://snyk.io/test/npm/@eggplugin/s3/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@eggplugin/s3
[download-image]: https://img.shields.io/npm/dm/@eggplugin/s3.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggplugin/s3

AWS S3 plugin for Egg

## Install

```bash
$ npm i @eggplugin/s3 --save
```

## Configuration

```js
// {app_root}/config/plugin.js
exports.s3 = {
  enable: true,
  package: '@eggplugin/s3',
};
```
see [config/config.default.js](config/config.default.js) for more detail.

### Simple database instance

```js
// {app_root}/config/config.default.js
exports.s3 = {
  client: {
    accessKeyId: '',
    secretAccessKey: '',
    endpoint: '',
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  // you can access to simple aws s3 instance using app.s3.
  const s3 = app.s3;
  const data = await s3.listBuckets().promise();
  const buckets = data.Buckets.map(item => item.Name);
  console.log(buckets);
}).catch(console.error);
```

### Multiple database instance

```js
exports.s3 = {
  // default configuration for all clients
  default: {
    // endpoint: '',
    // s3ForcePathStyle: '',
    // maxRetries: '',
    // sslEnabled: '',
    // apiVersion: '',
    // signatureVersion: '',
    // ...
  },
  clients: {
    // clientId, access the client instance by app.s3.get('clientId')
    client1: {
      accessKeyId: '',
      secretAccessKey: '',
      endpoint: '',
    // ...
    },
    client2: {
      accessKeyId: '',
      secretAccessKey: '',
      endpoint: '',
      // ...
    },
    // ...
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```

Usage:

```js
(async () => {
  const client1 = app.s3.get('client1'); 
  const client2 = app.s3.get('client2'); 
  const data1 = await client1.listBuckets().promise();
  const data2 = await client2.listBuckets().promise();
}).catch(console.error);
```

## Questions & Suggestions

Please open an issue [here](https://github.com/fuxingZhang/egg-s3/issues).

## License

[MIT](LICENSE)