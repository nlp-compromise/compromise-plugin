var test = require('tape');
var both = require('../src');
var pack = both.pack
var unpack = both.unpack

var plugin = {
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
  var str = pack(plugin);
  var unpacked = unpack(str);
  t.deepEqual(plugin, unpacked, 'in==out');
  t.end();
});

test('packPlural-edge-cases', function(t) {
  var input = {
    name: 'tryplurals2',
    plurals: {
      aaaaaaa: 'aaaaaaa', //equal
      aaaaaaaa: 'bb', //shorter
      aa: 'bbbbbbb', //longer
      a: 'a and some b' //spaces
    }
  };
  var str = pack(input);
  var output = unpack(str);
  t.deepEqual(input, output, 'in==out');
  t.end();
});
