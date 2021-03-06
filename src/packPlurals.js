//packs data in the form of {key:'value'}, where key + value have a shared prefix
const normalize = function(str) {
  str = str.replace(/[,|]/g, '')
  return str
}

const compareBoth = function(a, b) {
  a = normalize(a).split('')
  b = normalize(b).split('')
  const common = []
  let suffA = []
  let suffB = []
  let len = a.length
  if (b.length > a.length) {
    len = b.length
  }
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) {
      common.push(a[i])
    } else {
      suffA = a.slice(i, a.length)
      suffB = b.slice(i, b.length)
      break
    }
  }
  let str = common.join('')
  if (suffA.length > 0) {
    str += '|' + suffA.join('')
  }
  str += '|' + suffB.join('')
  return str
}

const packPlurals = function(obj) {
  return Object.keys(obj)
    .map(k => {
      return compareBoth(k, obj[k])
    })
    .join(',')
}

module.exports = packPlurals

// var str = packPlurals({
//   house: 'houses',
//   matrix: 'matrices'
// });
// console.log(str);
// var unpack = require('./unpack');
// console.log(unpack(str));
