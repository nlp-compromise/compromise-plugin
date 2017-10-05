// var compromise = require('compromise');
// var compromise = require('/Users/spencer/nlp/nlp-compromise');
var chalk = require('chalk');
var sizeOf = require('object-sizeof');
var efrt = require('efrt');
// var packWords = require('./packWords');
var plurals = require('./packPlurals');
var jsfn = require('jsonfn').JSONfn;




var pack = function(obj) {
  // asdf
  if (obj.words) {
    obj.words = efrt.pack(obj.words);
  }
  // if (obj.tags) {
  //   obj.tags = JSON.stringify(obj.tags);
  // }
  // if (obj.plurals) {
  //   obj.plurals = plurals(obj.plurals);
  // }
  // if (obj.postProcess) {
  //   obj.postProcess = uglify(obj.postProcess);
  //   console.log(uglify(obj.postProcess))
  // }
  return obj
};

module.exports = {
  pack: pack,
// unpack: compromise.unpack,
};
