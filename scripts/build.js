const fs = require('fs')
const exec = require('shelljs').exec
const chalk = require('chalk')
const pkg = require('../package.json')
var fs = require('fs')

const browserify = '"node_modules/.bin/browserify"'
const derequire = '"node_modules/.bin/derequire"'
const es5 = './builds/compromise-plugin.js'

const fileSize = function(src) {
  const stats = fs.statSync(src)
  return (stats['size'] / 1000.0).toFixed(2)
}

//cleanup. remove old builds
exec('rm -rf ./builds && mkdir builds')

console.log(chalk.yellow(' 🕑 creating full build..'))

const banner =
  '/* compromise-plugin v' +
  pkg.version +
  '\n   github.com/nlp-compromise/compromise-plugin\n   MIT\n*/\n'

//es5 main (browserify + derequire)
cmd = browserify + ' "./src/index.js" --standalone nlp-plugin'
// cmd += ' -t uglifyify';
// cmd += ' -p bundle-collapser/plugin';
// cmd += ' --presets [ es2015 ] ';
cmd += ' | ' + derequire
cmd += ' >> ' + es5
exec(cmd)

console.log(chalk.green(' done full build!    es5 ' + fileSize(es5) + 'k\n'))
