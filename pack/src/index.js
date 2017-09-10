const chalk = require('chalk');
const sizeOf = require('object-sizeof');
const efrt = require('efrt');
const keyValue = require('./key-value');
const uglify = require('./uglify-code');

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
    obj.plurals = keyValue(obj.plurals);
  }

  if (obj.postProcess) {
    obj.postProcess = uglify(obj.postProcess);
  }
  return JSON.stringify(obj, null, 2);
};

module.exports = packobj;
