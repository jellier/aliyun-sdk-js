var client = require('./ocs');

// -------------------------------
// https://code.google.com/p/memcached/wiki/MemcacheBinaryProtocol
// 4.4. Delete
// -------------------------------

// todo: Get Quietly, Get Key, Get Key Quietly 尚未提供

client.delete('hello', function(err, data) {
  if(err) {
    console.log('error:', err);
    return;
  }

  console.log('success:', data);
});
