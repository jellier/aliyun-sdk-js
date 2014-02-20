var ALY = require('../../index.js');

var ocs = ALY.OCS.Client.create('OCS实例地址:OCS实例端口', {
  username: '在OCS申请的用户名',
  password: '在OCS申请的密码'
});

module.exports = ocs;
