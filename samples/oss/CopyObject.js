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
// 5.4.1 Copy Object
// -------------------------------

oss.copyObject({
    Bucket: 'chylvina',
    CopySource: '/chylvina/3.html',
    Key: '3-copy.html',
    //CopySourceIfMatch: '',
    //CopySourceIfNoneMatch: '',
    //CopySourceIfModifiedSince: '',
    //CopySourceIfUnmodifiedSince: '',
    //CopySourceIfModifiedSince: '',
    //MetadataDirective: '',
    //AccessControlAllowOrigin: '',
    ContentType: 'text/plain',
    CacheControl: 'no-cache',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
    ContentDisposition: '',           // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1
    ContentEncoding: 'utf-8',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
    ServerSideEncryption: 'AES256',
    Expires: 60
  },
  function (err, data) {

    if (err) {
      console.log('error:', err);
      return;
    }

    console.log('success:', data);

  });