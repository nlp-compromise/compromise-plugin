const pack = require('./pack/src');
const unpack = require('./unpack/src');

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

let obj = pack(plugin);
console.log(obj)

let p2 = unpack(obj)
console.log(JSON.stringify(p2, null, 2))
console.log('\n\n')
p2.postProcess()
