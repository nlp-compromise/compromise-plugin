// var nlp = require('compromise');
var nlp = require('/Users/spencer/nlp/nlp-compromise/src');
// var chalk = require('chalk');
// var sizeOf = require('object-sizeof');
var efrt = require('efrt');
// var unpack = require('../unpack')
// var packWords = require('./packWords');
var keyValue = require('./key-value');
var verbs = require('./verbs');
var plurals = require('./packPlurals');


var pack = function(obj) {
  obj = Object.assign({}, obj)
  if (obj.words) {
    obj.words = efrt.pack(obj.words);
  }
  if (obj.patterns) {
    obj.patterns = keyValue(obj.patterns)
  }
  if (obj.regex) {
    obj.regex = keyValue(obj.regex)
  }
  if (obj.plurals) {
    obj.plurals = plurals(obj.plurals);
  }
  if (obj.conjugations) {
    obj.conjugations = verbs(obj.conjugations);
  }
  return JSON.stringify(obj, null, 0)
};

module.exports = {
  pack: pack,
  unpack: nlp.unpack,
};
