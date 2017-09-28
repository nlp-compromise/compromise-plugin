var test = require('tape');
var pack = require('../pack');
var unpack = require('../unpack/src/index');

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
  var str = pack(plugin);
  var unpacked = unpack(str);
  t.deepEqual(plugin, unpacked, 'in==out');
  t.ok(plugin.postProcess(true), 'postProcess runs');
  t.end();
});
