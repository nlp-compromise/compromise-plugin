// const jsfn = require('jsonfn').JSONfn;
const efrtUnpack = require('efrt-unpack');

const unpackPlurals = function(str) {
  return str.split(/,/g).reduce((h, s) => {
    let arr = s.split(/\|/g)
    if (arr.length == 3) {
      h[arr[0] + arr[1]] = arr[0] + arr[2]
    } else if (arr.length == 2) {
      h[arr[0]] = arr[0] + arr[1]
    } else {
      h[arr[0]] = arr[0]
    }
    return h;
  }, {});
}

const unpack = function(obj) {
  if (typeof obj === 'string') {
    obj = JSON.parse(obj);
  }
  //use efrt to unpack words
  obj.words = efrtUnpack(obj.words)

  //obj.tags is just stringified
  if (obj.tags && typeof obj.tags === 'string') {
    obj.tags = JSON.parse(obj.tags);
  }
  //plurals is packed in a weird way
  if (obj.plurals && typeof obj.plurals === 'string') {
    obj.plurals = unpackPlurals(obj.plurals)
  }
  return obj
};
module.exports = unpack;
