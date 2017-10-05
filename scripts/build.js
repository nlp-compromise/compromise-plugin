var fs = require('fs');
var exec = require('shelljs').exec;
var chalk = require('chalk');
var pkg = require('../package.json');
var fs = require('fs');

var browserify = '"node_modules/.bin/browserify"';
var derequire = '"node_modules/.bin/derequire"';
var es5 = './builds/compromise-plugin.js';

var fileSize = function(src) {
  var stats = fs.statSync(src);
  return (stats['size'] / 1000.0).toFixed(2);
};

console.log(chalk.yellow(' 🕑 creating full build..'));

var banner = '/* compromise-plugin v' + pkg.version + '\n   github.com/nlp-compromise/compromise-plugin\n   MIT\n*/\n';

//es5 main (browserify + derequire)
cmd = browserify + ' "./src/index.js" --standalone nlp-plugin';
// cmd += ' -t uglifyify';
// cmd += ' -p bundle-collapser/plugin';
// cmd += ' --presets [ es2015 ] ';
cmd += ' | ' + derequire;
cmd += ' >> ' + es5;
exec(cmd);

console.log(chalk.green(' done full build!    es5 ' + fileSize(es5) + 'k\n'));
