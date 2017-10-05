//supported verb forms:
const forms = [
  'pastTense',
  'presentTense',
  'gerund',
  'participle',
]
//find the shared substring between the two forms
const prefix = function(inf, str) {
  for (let k = 0; k < inf.length; k++) {
    if (str.length <= k || inf[k] !== str[k]) {
      // console.log(str.substr(0, k))
      return k
    }
  }
  return inf.length
}

//find similarities between conjugations
const press = function(arr) {
  //find the always-shared prefix (if there is one)
  let inf = arr[0]
  let len = inf.length
  let found = false
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== undefined) {
      let pref = prefix(inf, arr[i])
      if (pref > 1 && pref <= len) {
        found = true
        len = pref
      }
    }
  }
  if (!found) {
    len = 0
  }

  let substr = inf.substr(0, len)
  let res = substr + ':'
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      res += ','
    } else {
      res += arr[i].substr(len, arr[1].length + 1) + ','
    }
  }
  return res
}


const packVerbs = function(verbs) {
  let list = Object.keys(verbs).map((k) => {
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
    const str = press(arr)
    return str
  })
  return list.join('|')
}
module.exports = packVerbs
