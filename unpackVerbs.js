//supported verb forms:
const forms = [
  'Infinitive',
  'PastTense',
  'PresentTense',
  'Gerund',
  'Participle',
]
//
const unpackVerbs = function(str) {
  let verbs = str.split('|')
  return verbs.reduce((h, s) => {
    let parts = s.split(':')
    let ends = parts[1].split(',')
    let inf = parts[0] + ends[0]
    h[inf] = {}
    for (let i = 1; i < forms.length; i++) {
      if (ends[i]) {
        h[inf][forms[i]] = parts[0] + ends[i]
      }
    }
    return h
  }, {})
}
module.exports = unpackVerbs
