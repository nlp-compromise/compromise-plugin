
//pivot category-like data (key-vals with frequently shared values)
// into a 'value:[key, key]' format
var keyValue = function(obj) {
  obj = Object.keys(obj).reduce((h, k) => {
    if (typeof obj[k] === 'string') {
      h[obj[k]] = h[obj[k]] || []
      h[obj[k]].push(k)
    } else {
      //handle values as an array
      obj[k].forEach((key) => {
        h[key] = h[key] || []
        h[key].push(k)
      })
    }
    return h;
  }, {});
  return obj
}
module.exports = keyValue
