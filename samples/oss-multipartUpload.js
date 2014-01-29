// Based on Glacier's example: http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/examples.html#Amazon_Glacier__Multi-part_Upload
var fs = require('fs');
var AWS = require('../lib/aws.js');

var s3 = new AWS.OSS({
  endpoint: 'http://oss-test.aliyun-inc.com',//'http://oss-cn-hangzhou.aliyuncs.com',
  accessKeyId: 'pgvydev9bcbwpe3',//"DpqmTnnCVV45s7gP",
  secretAccessKey: 'ZXJ1ZzZqbTdraWp4eTlkZWhmMGk=',//"wJT5OddEiVW0o3BqolssXmD5MYWTJv",
  region: "us-west-1",
  apiVersion: '2006-03-01',
  httpOptions: {
    //proxy: 'http://127.0.0.1:8888'
  }
});

// File
var fileName = '1.mp3';
var filePath = 'tmp/' + fileName;
var fileKey = fileName;
var buffer = fs.readFileSync('/Users/chylvina/Workspace/GitHub/aliyun-sdk-js/' + filePath);
// S3 Upload options
var bucket = 'chylvina';

// Upload
var startTime = new Date();
var partNum = 0;
var partSize = 1024 * 1024 * 5; // Minimum 5MB per chunk (except the last part) http://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadComplete.html
var numPartsLeft = Math.ceil(buffer.length / partSize);
var maxUploadTries = 3;

var multipartMap = {
  Parts: []
};

function completeMultipartUpload(s3, doneParams) {
  s3.completeMultipartUpload(doneParams, function (err, data) {
    if (err) {
      console.log("An error occurred while completing the multipart upload");
      console.log(err);
    } else {
      var delta = (new Date() - startTime) / 1000;
      console.log('Completed upload in', delta, 'seconds');
      console.log('Final upload data:', data);
    }
  });
}

function uploadPart(s3, multipart, partParams, tryNum) {
  var tryNum = tryNum || 1;
  s3.uploadPart(partParams, function (multiErr, mData) {
    if (multiErr) {
      console.log('multiErr, upload part error:', multiErr);
      if (tryNum < maxUploadTries) {
        console.log('Retrying upload of part: #', partParams.PartNumber)
        uploadPart(s3, multipart, partParams, tryNum + 1);
      } else {
        console.log('Failed uploading part: #', partParams.PartNumber)
      }
      return;
    }
    multipartMap.Parts[this.request.params.PartNumber - 1] = {
      ETag: mData.ETag,
      PartNumber: Number(this.request.params.PartNumber)
    };
    console.log("Completed part", this.request.params.PartNumber);
    console.log('mData', mData);
    if (--numPartsLeft > 0) return; // complete only when all parts uploaded

    var doneParams = {
      Bucket: bucket,
      Key: fileKey,
      CompleteMultipartUpload: multipartMap,
      UploadId: multipart.UploadId
    };

    console.log("Completing upload...");
    completeMultipartUpload(s3, doneParams);
  });
}

// Multipart
console.log("Creating multipart upload for:", fileKey);
s3.createMultipartUpload({
  Bucket: bucket,
  Key: fileKey,
  ContentType: 'video/mp4'
}, function (mpErr, multipart) {
  if (mpErr) {
    console.log('Error!', mpErr);
    return;
  }
  console.log("Got upload ID", multipart.UploadId);

  // Grab each partSize chunk and upload it as a part
  for (var rangeStart = 0; rangeStart < buffer.length; rangeStart += partSize) {
    partNum++;
    var end = Math.min(rangeStart + partSize, buffer.length),
      partParams = {
        Body: buffer.slice(rangeStart, end),
        Bucket: bucket,
        Key: fileKey,
        PartNumber: String(partNum),
        UploadId: multipart.UploadId
      };

    // Send a single part
    console.log('Uploading part: #', partParams.PartNumber, ', Range start:', rangeStart);
    uploadPart(s3, multipart, partParams);
  }
});