var fs = require('fs');
var exec = require('shelljs').exec;
var chalk = require('chalk');
var UglifyJS = require('uglify-js');
var pkg = require('../package.json');
var fs = require('fs');

var browserify = '"node_modules/.bin/browserify"';
var derequire = '"node_modules/.bin/derequire"';
var es5 = './unpack/builds/compromise-unpack.js';
// var es5min = './unpack/builds/compromise-unpack.min.js';

var fileSize = function(src) {
  var stats = fs.statSync(src);
  return (stats['size'] / 1000.0).toFixed(2);
};

console.log(chalk.yellow(' 🕑 creating unpack build..'));

var banner = '/* compromise-unpack v' + pkg.version + '\n   github.com/nlp-compromise/compromise-unpack\n   MIT\n*/\n';

cmd = browserify + ' "./unpack/src/index.js" --standalone nlp-unpack';
cmd += ' | ' + derequire;
cmd += ' >> ' + es5;
exec(cmd);

console.log(chalk.green(' done unpack build.    es5 ' + fileSize(es5) + 'k\n'));
