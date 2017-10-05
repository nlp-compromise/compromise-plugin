var test = require('tape');
var both = require('../src');
var pack = both.pack
var unpack = both.unpack

var plugin = {
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
    one: 'one',
  }
};

test('test-all', function(t) {
  var str = pack(plugin);
  var unpacked = unpack(str);
  t.deepEqual(plugin, unpacked, 'in==out');
  // t.ok(plugin.postProcess(true), 'postProcess runs');
  t.end();
});
