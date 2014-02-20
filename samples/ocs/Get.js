var client = require('./ocs');

// -------------------------------
// https://code.google.com/p/memcached/wiki/MemcacheBinaryProtocol
// 4.2. Get, Get Quietly, Get Key, Get Key Quietly
// -------------------------------

// todo: Get Quietly, Get Key, Get Key Quietly 尚未提供

client.get('hello', function(err, data) {
  if(err) {
    console.log('error:', err);
    return;
  }

  console.log('success:', data.toString());
});
