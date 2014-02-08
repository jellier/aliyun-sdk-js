var fs = require('fs');

var AWS = require('../lib/aws.js');

//AWS.config.loadFromPath('./config.json');

var oss = new AWS.OSS({
  endpoint: 'http://oss-test.aliyun-inc.com',//'http://oss-cn-hangzhou.aliyuncs.com',
  accessKeyId: 'pgvydev9bcbwpe3',//"DpqmTnnCVV45s7gP",
  secretAccessKey: 'ZXJ1ZzZqbTdraWp4eTlkZWhmMGk=',//"wJT5OddEiVW0o3BqolssXmD5MYWTJv",
  region: "us-west-1",
  apiVersion: '2013-10-15',
  httpOptions: {
    //proxy: 'http://127.0.0.1:8888'
  }
});

var s3 = new AWS.S3();

var url = s3.getSignedUrl('getObject', {
  Bucket: 'bucket', Key: 'key'
});

console.log(url);