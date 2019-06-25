const nlp = require('compromise')
const efrt = require('efrt')
const keyValue = require('./key-value')
const verbs = require('./verbs')
const plurals = require('./packPlurals')

const pack = function(obj) {
  obj = Object.assign({}, obj)
  if (obj.words) {
    obj.words = efrt.pack(obj.words)
  }
  if (obj.patterns) {
    obj.patterns = keyValue(obj.patterns)
  }
  if (obj.regex) {
    obj.regex = keyValue(obj.regex)
  }
  if (obj.plurals) {
    obj.plurals = plurals(obj.plurals)
  }
  if (obj.conjugations) {
    obj.conjugations = verbs(obj.conjugations)
  }
  return JSON.stringify(obj, null, 0)
}

module.exports = {
  pack: pack,
  unpack: nlp.unpack
}
