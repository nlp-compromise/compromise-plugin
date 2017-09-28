// const jsfn = require('jsonfn').JSONfn;
const efrtUnpack = require('efrt-unpack');
const unpack = function(plugin) {
  if (typeof plugin === 'string') {
    plugin = JSON.parse(plugin);
  }
  plugin.words = efrtUnpack(plugin.words)
  return plugin
};
module.exports = unpack;
