<template>
  <div id="app">
    <div class="col">
      <div>a big
        <a href="https://github.com/nlp-compromise/compromise-plugin">Compromise plugin</a>:
      </div>
      <textarea ref="input" v-model="unpacked" placeholder="{}"></textarea>
    </div>
    <div class="col">
      <div>a tiny, compressed version:</div>
      <textarea v-model="packed" placeholder="{}" spellcheck="false" readonly="true" style="height:30%;"></textarea>
    </div>
  </div>
</template>

<script>
var nlpPlugin=require('compromise-plugin');
var placeholder=require('./plugin');
var CodeMirror=require('../lib/codemirror.js')

export default {
  name: 'app',
  mounted(){
    var editor = CodeMirror.fromTextArea(this.$refs.input, {
       lineNumbers: false,
       mode:'js',
       theme:'spencertheme'
     });
  },
  methods:{},
  data () {
    return{
      plugin:placeholder
    }
  },
  computed:{
    packed:function(){
      let str=JSON.stringify( nlpPlugin.pack(this.plugin),null,2)
      return str
    },
    unpacked:{
      get:function(){
        return JSON.stringify(this.plugin, null,2)
      },
      set:function(obj){
        console.log(typeof obj)
        this.plugin=JSON.parse(obj)
      }
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  margin:25px;
  padding:0px;
  height:100vh;
  width:100%;
  display:flex;
  flex-wrap: wrap;
}
.col{
  width:50vw;
  min-width:300px;
}
textarea{
  width:80%;
  height:80%;
  text-align:left;
  /*margin-top:15px;*/
  border:2px solid darkgrey;
  padding:30px;
  border-radius:7px;
  color:grey;
  font-size:14px;
}
</style>
