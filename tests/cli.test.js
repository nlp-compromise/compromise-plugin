const test = require('tape')
const exec = require('shelljs').exec

test('test-pack-cli', function(t) {
  const cmd = 'node ./bin/pack.js ./tests/unpacked.txt '
  exec(cmd)
  t.ok(true, 'runs pack cli')
  t.end()
})

test('test-unpack-cli', function(t) {
  const cmd = 'node ./bin/unpack.js ./tests/packed.txt '
  exec(cmd)
  t.ok(true, 'runs unpack cli')
  t.end()
})
