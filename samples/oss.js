var fs = require('fs');

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

/*oss.createBucket({
 Bucket: 'chylvina1',
 CreateBucketConfiguration: {
 LocationConstraint: 'oss-cn-hangzhou-a'
 }
 }, function (err, data) {
 if (err) {
 console.log(err);
 return;
 }

 console.log(200, data);
 });*/

/*oss.deleteBucket({
 Bucket: 'chylvina'
 }, function (err, data) {
 if (err) {
 console.log(err);
 return;
 }

 console.log(data);
 });*/

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
 return;
 }

 console.log("Successfully uploaded data to Bucket:chylvina");

 });*/

/*
 oss.getObject({
 Bucket: 'chylvina',
 Key: 'test.html'
 },
 function (err, data) {

 if (err) {
 console.log(err);
 return;
 }

 console.log(200, data);

 });*/

/*oss.deleteBucket({
 Bucket: 'chylvina1'
 }, function (err, data) {
 if (err) {
 console.log(err);
 return;
 }

 console.log(200, data);
 });*/

/*
 fs.readFile('testem.json', function (err, data) {
 if (err) {
 console.log(err);
 return;
 }

 oss.putObject({
 Bucket: 'chylvina',
 Key: 'test.json',
 Body: data,
 ContentType: 'text/plain',
 Expires: 60
 },
 function (err, data) {

 if (err) {
 console.log(err);
 return;
 }

 console.log("Successfully uploaded data to Bucket:chylvina");

 });
 });*/

oss.getObject({
    Bucket: 'chylvina',
    Key: 'test.json',
    ResponseContentType: 'text/plain',
    ResponseExpires: 60
  },
  function (err, data) {

    if (err) {
      console.log(err);
      return;
    }

    console.log(200, data);

    //console.log(data.Body.toString('utf8'));

  });