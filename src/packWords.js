var efrt = require('efrt');

const packWords = function(words) {
  let obj = efrt.pack(words);
  //turn the compressed key-value thing into a string:
  return Object.keys(obj).map((k) => {
    return k + ':' + obj[k]
  }).join('|')
}
module.exports = packWords
