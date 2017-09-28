var chalk = require('chalk');
var sizeOf = require('object-sizeof');
var efrt = require('efrt');
var plurals = require('./plurals');
var jsfn = require('jsonfn').JSONfn;

var filesize = function(obj) {
  return sizeOf(obj) / 1000;
};

var packobj = function(input) {
  var obj = input
  // if (typeof input === 'string') {
  //   obj = eval('(' + input + ')');
  // }
  obj = obj || {};

  var init = filesize(obj);
  // console.log(chalk.blue('initial size:  - - ' + init + 'kb'));

  if (obj.words) {
    obj.words = efrt.pack(obj.words);
  }
  if (obj.tags) {
    obj.tags = JSON.stringify(obj.tags);
  }
  if (obj.plurals) {
    obj.plurals = plurals(obj.plurals);
  }

  // if (obj.postProcess) {
  //   obj.postProcess = uglify(obj.postProcess);
  //   console.log(uglify(obj.postProcess))
  // }
  return obj
};

module.exports = packobj;
