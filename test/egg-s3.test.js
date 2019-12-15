'use strict';

const mock = require('egg-mock');

describe('test/egg-s3.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-s3-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET s3 success', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, s3')
      .expect(200);
  });
});
