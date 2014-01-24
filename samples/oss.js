var AWS = require('../lib/aws.js');

//AWS.config.loadFromPath('./config.json');

var oss = new AWS.OSS({
  endpoint: 'http://oss-test.aliyun-inc.com',//'http://oss-cn-hangzhou.aliyuncs.com',
  accessKeyId: 'pgvydev9bcbwpe3',//"DpqmTnnCVV45s7gP",
  secretAccessKey: 'ZXJ1ZzZqbTdraWp4eTlkZWhmMGk=',//"wJT5OddEiVW0o3BqolssXmD5MYWTJv",
  region: "us-west-1",
  apiVersion: '2006-03-01',
  httpOptions: {
    //proxy: 'http://127.0.0.1:8888'
  }
});

/*var url = oss.getSignedUrl('getObject', {
 Bucket: 'chylvina',
 Key: '1.txt',
 Expires: 60
 });*/

/*oss.listBuckets(function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});*/

oss.createBucket({
  Bucket: 'chylvina',
  CreateBucketConfiguration: {
    LocationConstraint: 'oss-cn-hangzhou-a'
  }
}, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});

/*oss.putObject({
 Bucket: 'chylvina',
 Key: 'test.html',
 Body: (new Date()).getMinutes().toString(),
 ContentType: 'text/plain',
 Expires: 60
 },
 function (err, data) {

 if (err) {
 console.log(err);
 }
 else {
 console.log("Successfully uploaded data to Bucket:chylvina");
 }

 });*/

/*s3.createBucket({
 Bucket: 'chylvinaBucket'
 },
 function (err, data) {

 if (err) {
 console.log(err)
 }
 else {
 console.log("Successfully create chylvinaBucket");
 }

 });*/

/*
 var s3 = new AWS.S3();
 s3.getBucketAcl(params, function (err, data) {
 if (err) {
 console.log(err); // an error occurred
 } else {
 console.log(data); // successful response
 }
 });*/
