const pack = require('./pack/src');
const unpack = require('./unpack/src');

var plugin = {
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
  postProcess: function(doc) {
    console.log('wee it works!')
    // doc.match('#Adjective era').tag('#Date');
    return doc;
  }
};

let obj = pack(plugin);
console.log(obj)

let p2 = unpack(obj)
console.log(p2 + '\n\n')
p2.postProcess()
