// var plg = require('./builds/compromise-plugin.js')
var plg = require('./src/index')
var plugin = {
  name: "food-plugin",
  words: {
    strawberry: 'Fruit',
    blueberry: 'Fruit',
    raspberry: 'Fruit',
    banana: 'Fruit',
    tomato: ['Fruit', 'Vegetable'],
    cucumber: 'Vegetable',
    pepper: ['Vegetable', 'Spicy'],
    salad: ['Fruit', 'vegetable']
  },
  "tags": {
    "Food": {
      "isA": "Noun",
    },
    "Fruit": {
      "isA": "Food",
      "notA": "Vegetable"
    },
    "Vegetable": {
      "isA": "Food",
      "notA": "Fruit"
    }
  },
  "regex": {
    ".{3}sauce$": 'Food',
    ".peritif$": 'Food'
  },
  "patterns": {
    "#Singular (cake|pie|pudding)": 'Dessert',
    "#Cardinal #Unit of [#Noun]": 'Food',
    "(chopped|fried|peeled) #Noun": 'Food'
  },
  plurals: {
    apricot: 'apricots',
    banana: 'bananas',
    loaf: 'loaves',
    tooth: 'teeth',
    fruit: 'fruit'
  },

  conjugations: {
    walk: {
      PastTense: 'walked',
      PresentTense: 'walks',
    },
    dive: {
      PastTense: 'dove',
      Gerund: 'diving',
    },
    arise: {
      PastTense: 'arose',
      Participle: 'arisen'
    },
  }

}
plugin = {
  // name: 'fun',
  // words: {
  //   brontosaurus: 'Dinosaur',
  //   trex: 'Dinosaur'
  // },
  // tags: {
  //   Dinosaur: {
  //     isA: 'Animal'
  //   },
  //   Animal: {
  //     isA: 'Noun'
  //   }
  // },
  regex: {
    // '.osaurus$': 'Dinosaur',
    '.osaurus$': ['Dinosaur', 'Animal'],
  // 'uuu+': 'Exaggeration'
  },
// plurals: {
//   horse: 'horses',
//   fly: 'flies',
//   jeep: 'jeeps',
//   one: 'one',
// }
};
var str = plg.pack(plugin);
console.log(str)
console.log('\n\n')
// console.log(plg.unpack(str))

// var p2 = unpack(obj)
// console.log(JSON.stringify(p2, null, 2))
// console.log('\n\n')
// p2.postProcess()
