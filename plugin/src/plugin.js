module.exports = {
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
      "isA": "Noun"
    },
    "Fruit": {
      "isA": "Food"
    },
    "Vegetable": {
      "isA": "Food"
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

}
