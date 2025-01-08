'use strict';

/**
 * egg-s3 default config
 * @member Config#s3
 */
exports.s3 = {
    // default configuration for all clients

    app: true,
    agent: false,

    // Single client
    // client: {
    //     region: '',
    //     credentials: {
    //         accessKeyId: '',
    //         secretAccessKey: ''
    //     },
    // },

    // Multi client
    // clients: {
    //   client1: {
    //     accessKeyId: '',
    //     secretAccessKey: '',
    //     endpoint: '',
    //     // ...
    //   },
    //   client2: {
    //     accessKeyId: '',
    //     secretAccessKey: '',
    //     endpoint: '',
    //     // ...
    //   },
    // },
};
