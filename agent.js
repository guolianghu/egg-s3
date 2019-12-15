'use strict';

const s3 = require('./lib/s3');

module.exports = agent => {
  if (agent.config.s3.agent) s3(agent);
};
