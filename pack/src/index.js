const chalk = require('chalk');
const sizeOf = require('object-sizeof');
const efrt = require('efrt');
const plurals = require('./plurals');
const jsfn = require('jsonfn').JSONfn;

const filesize = function(obj) {
  return sizeOf(obj) / 1000;
};

const packobj = function(obj) {
  obj = obj || {};

  let init = filesize(obj);
  console.log(chalk.blue('initial size:  - - ' + init + 'kb'));

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
