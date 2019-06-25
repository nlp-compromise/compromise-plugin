const test = require('tape')
const both = require('../src')
const pack = both.pack
const unpack = both.unpack

const plugin = {
  name: 'fun',
  words: {
    brontosaurus: 'Dinosaur',
    trex: 'Dinosaur'
  },
  tags: {
    Dinosaur: {
      isA: 'Animal'
    },
    Animal: {
      isA: 'Noun'
    }
  },
  regex: {
    '.osaurus$': 'Dinosaur',
    'uuu+': 'Exaggeration'
  },
  plurals: {
    horse: 'horses',
    fly: 'flies',
    jeep: 'jeeps',
    one: 'one'
  }
}

test('test-all', function(t) {
  const str = pack(plugin)
  const unpacked = unpack(str)
  t.deepEqual(plugin, unpacked, 'in==out')
  // t.ok(plugin.postProcess(true), 'postProcess runs');
  t.end()
})
