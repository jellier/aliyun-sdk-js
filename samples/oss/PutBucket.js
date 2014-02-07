var ALY = require('../../index.js');

// AWS.config.loadFromPath('../config.json');

var oss = new ALY.OSS({
  endpoint: 'http://oss-test.aliyun-inc.com',//'http://oss-cn-hangzhou.aliyuncs.com',
  accessKeyId: 'pgvydev9bcbwpe3',//"DpqmTnnCVV45s7gP",
  secretAccessKey: 'ZXJ1ZzZqbTdraWp4eTlkZWhmMGk=',//"wJT5OddEiVW0o3BqolssXmD5MYWTJv",
  apiVersion: '2013-10-15',
  httpOptions: {
    //proxy: 'http://127.0.0.1:8888'
  }
});

// -------------------------------
// 5.3.9 Put Bucket
// -------------------------------

oss.createBucket({
  Bucket: 'chylvina1',
  CreateBucketConfiguration: {
    LocationConstraint: 'oss-cn-hangzhou-a'   // oss-cn-hangzhou-a 或者 oss-cn-qingdao-a
  }
}, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(200, data);
});