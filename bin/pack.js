#!/usr/bin/env node
var pack = require('../src').pack;
var fs = require('fs');

var file = process.argv[2]
if (!file) {
  console.warn('pass in a file to read as a second param')
}

fs.readFile(file, (err, r) => {
  var str = r.toString()
  console.log(pack(JSON.parse(str)))
})
