var client = require('./ocs');

// -------------------------------
// https://code.google.com/p/memcached/wiki/MemcacheBinaryProtocol
// 4.5. Increment
// -------------------------------

// todo: Get Quietly, Get Key, Get Key Quietly 尚未提供

client.increment('count', 10, function(err, data) {
  if(err) {
    console.log('error:', err);
    return;
  }

  console.log('success:', data);
});
