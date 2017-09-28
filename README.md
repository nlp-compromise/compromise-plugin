<div align="center">
  <h4>:sunglasses::sunglasses::sunglasses::sunglasses:</h4>
  <h4>
    make a plugin for <b><a href="https://github.com/nlp-compromise/compromise">compromise</a></b>
  </h4>
</div>
<b>compromise</b> works by compressing its data in lots of weird ways.
With <b>compromise-plugin</b>, you can ship thousands, or tens-of-thousands of custom words and patterns to the client-side, for any natural-language-processing behaviour you'd like.

```js
//take this plugin,
var plugin = {
  name:'compromise-dinosaur',
	words: {
		brontosaurus:'Dinosaur',
		trex: 'Dinosaur'
	},
	tags: {
		Dinosaur: {
			isA: 'Animal'
		},
		Animal: {
			isA: 'Noun'
		}
	},
	rules: {
		'.osaurus$': 'Dinosaur',
		'uuu+': 'Exaggeration'
	},
  postProcess: (doc)=>{
    doc.match('#Adjective era').tag('#Date')
    return doc
  }
};

var pack = require('compromise-plugin');
var tinyPlugin= pack(plugin) //CRAZY_SMALL!


//then load it in nlp-compromise (it unpacks automatically)
nlp.plugin(tinyPlugin);
let doc = nlp('i saw a HUUUUGE trex').debug()
/*
	'i'           - Pronoun, Noun, Singular
	'saw'         - PastTense, Verb, VerbPhrase
	'a'           - Determiner
	'HUUUUGE'     - Exaggeration
	'trex'        - Dinosaur, Animal, Noun, Singular
*/
```

### CLI
if you prefer, you can integrate **compromise-plugin** into your workflow from the command-line:
```bash
npm i -g compromise-plugin
#pack it..
compromise-pack ./path/to/myPlugin.js | ./plugin.min.js

#unpack it..
compromise-unpack ./path/to/plugin.min.js
```

### Compatibility
the compromise plugin spec will change over time, and to avoid having to remember which versions line-up, we will try to use the same major-version numbers as compromise.

so if you want a plugin to work with comprimise v12, publish it with `compromise-plugin@12.*.*`

MIT
