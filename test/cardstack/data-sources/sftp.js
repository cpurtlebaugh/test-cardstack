const JSONAPIFactory = require('@cardstack/test-support/jsonapi-factory');
const fs = require('fs');

let factory = new JSONAPIFactory();
const privateKey = fs.readFileSync('/Users/user/dir/id_rsa');
console.log("process env: ", process.env);
console.log("private key ", privateKey);

factory.addResource('data-sources', 'sftp')
  .withAttributes({
    'source-type': '@cardstack/sftp',
    params: {
      contentType: 'sftp-files',
      branches: {
        master: {
          host: '',
          port: 22,
          username: '',
          privateKey
        }
      }
    }
});

module.exports = factory.getModels();
