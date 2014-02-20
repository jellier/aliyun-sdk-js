var client = require('./ocs');

// -------------------------------
// https://code.google.com/p/memcached/wiki/MemcacheBinaryProtocol
// 4.3. Set
// -------------------------------

// todo: Get Quietly, Get Key, Get Key Quietly 尚未提供

client.set('hello', 'world', function(err, data) {
  if(err) {
    console.log('error:', err);
    return;
  }

  console.log('success:', data);
});


client.set('object', '{ a: 1, b: "string", c: [ 1, 2, 3], d: {}}', function(err, data) {
  if(err) {
    console.log('error:', err);
    return;
  }

  console.log('success:', data);
});
