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
    doc.match('#Adjective era').tag('#Date');
    return doc;
  }
};

let str = pack(plugin);
console.log(unpack(str));
