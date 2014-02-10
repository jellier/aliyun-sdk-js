var ALY = require('../../index.js');

ALY.config.loadFromPath('../config.json');

var oss = new ALY.OSS({
  endpoint: 'http://oss-test.aliyun-inc.com',
  apiVersion: '2013-10-15'
});

// -------------------------------
// 5.3.4 Get Bucket (List Object)
// -------------------------------

oss.listObjects({
    Bucket: 'chylvina',
    MaxKeys: '10',
    Prefix: '',
    Marker: '',
    Delimiter: ''
  },
  function (err, data) {
    if (err) {
      console.log('error:', err);
      return;
    }

    console.log('success:', data);
  });