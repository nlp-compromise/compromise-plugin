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
    walk: {
      pastTense: 'walked',
      presentTense: 'walks',
    },
    dive: {
      pastTense: 'dove',
      gerund: 'diving',
    },
    arise: {
      pastTense: 'arose',
      participle: 'arisen'
    },
  }

}

let str = plg.pack(plugin);
console.log(str)
console.log(unpackVerbs(JSON.parse(str).conjugations))

// let p2 = unpack(obj)
// console.log(JSON.stringify(p2, null, 2))
// console.log('\n\n')
// p2.postProcess()
