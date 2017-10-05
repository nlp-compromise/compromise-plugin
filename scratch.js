const plg = require('./src/index')
const unpackVerbs = require('./unpackVerbs')
var plugin = {
  // name: "food-plugin",
  // words: {
  //   strawberry: 'Fruit',
  //   blueberry: 'Fruit',
  //   raspberry: 'Fruit',
  //   banana: 'Fruit',
  //   tomato: ['Fruit', 'Vegetable'],
  //   cucumber: 'Vegetable',
  //   pepper: ['Vegetable', 'Spicy'],
  //   salad: ['Fruit', 'vegetable']
  // },
  // "tags": {
  //   "Food": {
  //     "isA": "Noun",
  //   },
  //   "Fruit": {
  //     "isA": "Food",
  //     "notA": "Vegetable"
  //   },
  //   "Vegetable": {
  //     "isA": "Food",
  //     "notA": "Fruit"
  //   }
  // },
  // "regex": {
  //   ".{3}sauce$": 'Food',
  //   ".peritif$": 'Food'
  // },
  // "patterns": {
  //   "#Singular (cake|pie|pudding)": 'Dessert',
  //   "#Cardinal #Unit of [#Noun]": 'Food',
  //   "(chopped|fried|peeled) #Noun": 'Food'
  // },
  // plurals: {
  //   apricot: 'apricots',
  //   banana: 'bananas',
  //   loaf: 'loaves',
  //   tooth: 'teeth',
  //   fruit: 'fruit'
  // },
  conjugations: {
    hear: {
      PastTense: 'heard',
      Participle: 'heard'
    },
    hide: {
      PastTense: 'hid',
      Participle: 'hidden'
    },
  // hold: {
  //   PastTense: 'held',
  //   Participle: 'held'
  // },
  // hurt: {
  //   PastTense: 'hurt',
  //   Participle: 'hurt'
  // },
  // lay: {
  //   PastTense: 'laid',
  //   Participle: 'laid'
  // },
  // lead: {
  //   PastTense: 'led',
  //   Participle: 'led'
  // },
  // leave: {
  //   PastTense: 'left',
  //   Participle: 'left'
  // },
  // lie: {
  //   PastTense: 'lay',
  //   Gerund: 'lying'
  // },
  // light: {
  //   PastTense: 'lit',
  //   Participle: 'lit'
  // },
  // lose: {
  //   PastTense: 'lost',
  //   Gerund: 'losing'
  // },
  // make: {
  //   PastTense: 'made',
  //   Participle: 'made'
  // },
  // mean: {
  //   PastTense: 'meant',
  //   Participle: 'meant'
  // },
  // meet: {
  //   PastTense: 'met',
  //   Gerund: 'meeting',
  //   Participle: 'met'
  // },
  // pay: {
  //   PastTense: 'paid',
  //   Participle: 'paid'
  // },
  // read: {
  //   PastTense: 'read',
  //   Participle: 'read'
  // },
  // ring: {
  //   PastTense: 'rang',
  //   Participle: 'rung'
  // },
  // rise: {
  //   PastTense: 'rose',
  //   Gerund: 'rising',
  //   Participle: 'risen'
  // },
  // run: {
  //   PastTense: 'ran',
  //   Gerund: 'running',
  //   Participle: 'run'
  // },
  // say: {
  //   PastTense: 'said',
  //   PresentTense: 'says',
  //   Participle: 'said'
  // },
  // see: {
  //   PastTense: 'saw',
  //   Participle: 'seen'
  // },
  // sell: {
  //   PastTense: 'sold',
  //   Participle: 'sold'
  // },
  // shine: {
  //   PastTense: 'shone',
  //   Participle: 'shone'
  // },
  // shoot: {
  //   PastTense: 'shot',
  //   Participle: 'shot'
  // },
  // show: {
  //   PastTense: 'showed'
  // },
  // sing: {
  //   PastTense: 'sang',
  //   Participle: 'sung'
  // },
  // sink: {
  //   PastTense: 'sank'
  // },
  // sit: {
  //   PastTense: 'sat'
  // },
  // slide: {
  //   PastTense: 'slid',
  //   Participle: 'slid'
  // },
  // speak: {
  //   PastTense: 'spoke',
  //   Participle: 'spoken'
  // },
  // spin: {
  //   PastTense: 'spun',
  //   Gerund: 'spinning',
  //   Participle: 'spun'
  // },
  // stand: {
  //   PastTense: 'stood'
  // },
  // steal: {
  //   PastTense: 'stole'
  // },
  // stick: {
  //   PastTense: 'stuck'
  // },
  // sting: {
  //   PastTense: 'stung'
  // },
  // stream: {},
  // strike: {
  //   PastTense: 'struck',
  //   Gerund: 'striking'
  // },
  // swear: {
  //   PastTense: 'swore'
  // },
  // swim: {
  //   PastTense: 'swam',
  //   Gerund: 'swimming'
  // },
  // swing: {
  //   PastTense: 'swung'
  // },
  // teach: {
  //   PastTense: 'taught',
  //   PresentTense: 'teaches'
  // },
  // tear: {
  //   PastTense: 'tore'
  // },
  // tell: {
  //   PastTense: 'told'
  // },
  // think: {
  //   PastTense: 'thought'
  // },
  }
  // conjugations: {
  //   walk: {
  //     PastTense: 'walked',
  //     PresentTense: 'walks',
  //   },
  //   dive: {
  //     PastTense: 'dove',
  //     Gerund: 'diving',
  //   },
  //   arise: {
  //     PastTense: 'arose',
  //     Participle: 'arisen'
  //   },
  // }

}

let str = plg.pack(plugin);
console.log(str)
console.log(unpackVerbs(JSON.parse(str).conjugations))

// let p2 = unpack(obj)
// console.log(JSON.stringify(p2, null, 2))
// console.log('\n\n')
// p2.postProcess()
