var test = require('tape');
// var nlp = require('../lib/nlp');
const pack = require('../pack');
const unpack = require('../unpack');

let plugin = {
  name: 'tryplurals',
  plurals: {
    addendum: 'addenda',
    barracks: 'barracks',
    beau: 'beaux',
    leaf: 'leaves',
    libretto: 'libretti',
    loaf: 'loaves',
    man: 'men',
    matrix: 'matrices',
    memorandum: 'memoranda',
    modulus: 'moduli',
    mosquito: 'mosquitoes',
    move: 'moves',
    opus: 'opera',
    ovum: 'ova',
    ox: 'oxen',
    tableau: 'tableaux',
    thief: 'thieves',
    tooth: 'teeth',
    tornado: 'tornados',
    tuxedo: 'tuxedos',
    zero: 'zeros'
  }
};

test('pack-plurals', function(t) {
  let str = pack(plugin);
  let unpacked = unpack(str);
  t.deepEqual(plugin, unpacked, 'in==out');
  t.end();
});

test('packPlural-edge-cases', function(t) {
  let input = {
    name: 'tryplurals2',
    plurals: {
      aaaaaaa: 'aaaaaaa', //equal
      aaaaaaaa: 'bb', //shorter
      aa: 'bbbbbbb', //longer
      a: 'a and some b' //spaces
    }
  };
  let str = pack(input);
  let output = unpack(str);
  t.deepEqual(input, output, 'in==out');

  t.end();
});
