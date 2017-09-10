const UglifyJS = require('uglify-JS');
var jsmin = require('jsmin').jsmin;
// const minify = require('uglify-js').minify;
const jsfn = require('jsonfn').JSONfn;

const uglify = function(fn) {
  fn = '' + fn;
  return jsmin(fn, 3);
};

let add = function(first, second) {
  if (first === second) {
    console.log('hooray!');
  }
  return first + second;
};
// console.log(uglify(add));

module.exports = uglify;
