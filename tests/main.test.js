var test = require('tape');
const pack = require('../pack');
const unpack = require('../unpack/src/index');

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
  },
  postProcess: function(doc) {
    console.log('wee it works!')
    return doc;
  }
};

test('test-all', function(t) {
  let str = pack(plugin);
  let unpacked = unpack(str);
  t.deepEqual(plugin, unpacked, 'in==out');
  t.ok(plugin.postProcess(true), 'postProcess runs');
  t.end();
});
