
//pivot category-like data (key-vals with frequently shared values)
// into a 'value:[key, key]' format
const keyValue = function(obj) {
  obj = Object.keys(obj).reduce((h, k) => {
    if (h[obj[k]] === undefined) {
      h[obj[k]] = []
    }
    h[obj[k]].push(k)
    return h;
  }, {});
  return obj
}
module.exports = keyValue
