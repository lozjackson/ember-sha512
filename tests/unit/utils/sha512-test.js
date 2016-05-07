import sha512 from 'dummy/utils/sha512';
import { module, test } from 'qunit';

module('Unit | Utility | sha512');

test('hex_sha512', function(assert) {
  let result = sha512.hex_sha512('abc');
  assert.equal(result, 'ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f');
});

test('b64_sha512', function(assert) {
  let result = sha512.b64_sha512('abc');
  assert.equal(result, '3a81oZNherrMQXNJriBBMRLm+k6JqX6iCp7u5ktV05ohkpkqJ0/BqDa6PCOj/uu9RU1EI2Q86A4qmslPpUyknw');
});
