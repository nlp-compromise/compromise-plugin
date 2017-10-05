var test = require('tape');
var both = require('../src');
var pack = both.pack
var unpack = both.unpack

var plugin = {
  name: 'tryverbs',
  conjugations: {
    hear: {
      PastTense: 'heard',
      Participle: 'heard'
    },
    hide: {
      PastTense: 'hid',
      Participle: 'hidden'
    },
    hold: {
      PastTense: 'held',
      Participle: 'held'
    },
    hurt: {
      PastTense: 'hurt',
      Participle: 'hurt'
    },
    lay: {
      PastTense: 'laid',
      Participle: 'laid'
    },
    lead: {
      PastTense: 'led',
      Participle: 'led'
    },
    leave: {
      PastTense: 'left',
      Participle: 'left'
    },
    lie: {
      PastTense: 'lay',
      Gerund: 'lying'
    },
    light: {
      PastTense: 'lit',
      Participle: 'lit'
    },
    lose: {
      PastTense: 'lost',
      Gerund: 'losing'
    },
    make: {
      PastTense: 'made',
      Participle: 'made'
    },
    mean: {
      PastTense: 'meant',
      Participle: 'meant'
    },
    meet: {
      PastTense: 'met',
      Gerund: 'meeting',
      Participle: 'met'
    },
    pay: {
      PastTense: 'paid',
      Participle: 'paid'
    },
    read: {
      PastTense: 'read',
      Participle: 'read'
    },
    ring: {
      PastTense: 'rang',
      Participle: 'rung'
    },
    rise: {
      PastTense: 'rose',
      Gerund: 'rising',
      Participle: 'risen'
    },
    run: {
      PastTense: 'ran',
      Gerund: 'running',
      Participle: 'run'
    },
    say: {
      PastTense: 'said',
      PresentTense: 'says',
      Participle: 'said'
    },
    see: {
      PastTense: 'saw',
      Participle: 'seen'
    },
    sell: {
      PastTense: 'sold',
      Participle: 'sold'
    },
    shine: {
      PastTense: 'shone',
      Participle: 'shone'
    },
    shoot: {
      PastTense: 'shot',
      Participle: 'shot'
    },
    show: {
      PastTense: 'showed'
    },
    sing: {
      PastTense: 'sang',
      Participle: 'sung'
    },
    sink: {
      PastTense: 'sank'
    },
    sit: {
      PastTense: 'sat'
    },
    slide: {
      PastTense: 'slid',
      Participle: 'slid'
    },
    speak: {
      PastTense: 'spoke',
      Participle: 'spoken'
    },
    spin: {
      PastTense: 'spun',
      Gerund: 'spinning',
      Participle: 'spun'
    },
    stand: {
      PastTense: 'stood'
    },
    steal: {
      PastTense: 'stole'
    },
    stick: {
      PastTense: 'stuck'
    },
    sting: {
      PastTense: 'stung'
    },
    stream: {},
    strike: {
      PastTense: 'struck',
      Gerund: 'striking'
    },
    swear: {
      PastTense: 'swore'
    },
    swim: {
      PastTense: 'swam',
      Gerund: 'swimming'
    },
    swing: {
      PastTense: 'swung'
    },
    teach: {
      PastTense: 'taught',
      PresentTense: 'teaches'
    },
    tear: {
      PastTense: 'tore'
    },
    tell: {
      PastTense: 'told'
    },
    think: {
      PastTense: 'thought'
    },
  }
};
test('pack-verbs', function(t) {
  var str = pack(plugin);
  var unpacked = unpack(str);
  t.deepEqual(plugin, unpacked, 'in==out');
  t.equal(plugin.conjugations.tell.PastTense, unpacked.conjugations.tell.PastTense, 'tell-told')
  t.equal(plugin.conjugations.swim.PastTense, unpacked.conjugations.swim.PastTense, 'swim-swam')
  t.equal(plugin.conjugations.swim.Gerund, unpacked.conjugations.swim.Gerund, 'swim-swimming')
  t.end();
});
