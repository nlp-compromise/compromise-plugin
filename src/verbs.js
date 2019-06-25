//supported verb forms:
const forms = ['PastTense', 'PresentTense', 'Gerund', 'Participle']
//find the shared substring between the two forms
const substring = function(inf, str) {
  for (let k = 0; k < inf.length; k++) {
    if (str.length <= k || inf[k] !== str[k]) {
      // console.log(str.substr(0, k))
      return k
    }
  }
  return inf.length
}

//find similarities between conjugations
const findPrefix = function(arr) {
  //find the always-shared prefix (if there is one)
  const inf = arr[0]
  let len = inf.length
  let found = false
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      //a conjugation smaller than our prefix..
      if (arr[i].length < inf.length) {
        len = arr[i].length
      }
      const pref = substring(inf, arr[i])
      if (pref <= len) {
        found = true
        len = pref
      }
    }
  }
  //don't compress nothin'
  if (!found) {
    len = 0
  }
  //ok, turn it into a string with one shared prefix
  return inf.substr(0, len)
}

const pack = function(arr, prefix) {
  return arr.map(str => {
    if (str === undefined) {
      return ''
    }
    if (str === prefix) {
      return '_'
    }
    return str.substr(prefix.length, str.length)
  })
}

const packVerbs = function(verbs) {
  const list = Object.keys(verbs).map(k => {
    let arr = [k]
    for (let i = 0; i < forms.length; i++) {
      arr.push(verbs[k][forms[i]])
    }
    //remove the empty tail
    for (let i = arr.length; i > 0; i--) {
      if (arr[i] !== undefined) {
        arr = arr.slice(0, i + 1)
        break
      }
    }
    const prefix = findPrefix(arr)
    arr = pack(arr, prefix)
    const str = prefix + ':' + arr.join(',')
    return str
  })
  return list.join('|')
}
module.exports = packVerbs
