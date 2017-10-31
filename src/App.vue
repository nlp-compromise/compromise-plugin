<template>
  <div id="app">
    <div class="col">
      <div style="font-size:30px;">here's a big
        <a style="color:#f9a4ad" href="https://github.com/nlp-compromise/compromise-plugin">compromise plugin</a>
        <span style="color:#f9a4ad">→</span>
      </div>
      <textarea ref="input" v-model="plugin" placeholder="{}"></textarea>
      try it out!
    </div>
    <div class="col">
      <div style="margin-top:20px; margin-left:20px; font-size:30px;">the way smaller, <br/>compressed version:</div>
      <div style="font-size:24px; color:lightsteelblue; margin-left:15px;">var <i>myPlugin</i>=</div>

      <textarea v-model="packed" v-bind:class="{ invalid: valid===false }" placeholder="{}" spellcheck="false" readonly="true" style="height:250px;"></textarea>
      <div style="margin:20px; color:steelblue; font-family:Arial-Mono; text-align:left; font-weight:600; font-size:50px;">
        <div style="font-size:24px; color:lightsteelblue;">var nlp = require('compromise')</div>
        nlp.plugin(<i style="color:lightsteelblue;">myPlugin</i>)
        <div style="font-size:24px; color:lightsteelblue;">...<br/>
          nlp('myText')
          <i style="color:lightgrey; font-size:20px"> //whoosh!</i>
        </div>
      </div>
      <div><a style="margin:40px; color:#f9a4ad; font-size:30px;" href="https://github.com/nlp-compromise/compromise/wiki/Plugins">documentation</a></div>
    </div>
  </div>
</template>

<script>
var nlpPlugin=require('compromise-plugin');
var placeholder=require('./plugin');
var CodeMirror=require('../lib/codemirror.js')
window.CodeMirror=CodeMirror
var js=require('../lib/javascript.js')

export default {
  name: 'app',
  mounted(){
    var editor = CodeMirror.fromTextArea(this.$refs.input, {
       lineNumbers: true,
       mode:'javascript',
       json:true,
       theme:'spencertheme'
     });
     editor.on('change',(e)=>{
       this.pack(e.getValue())
     })
  },
  methods:{
    pack(obj){
      let plugin={}
      try{
         plugin=JSON.parse(obj)
         this.packed=JSON.stringify( nlpPlugin.pack(plugin),null,2)
      }catch(e){
        this.valid=false
        this.packed=e
        console.log(e)
      }
    }
  },
  data () {
    return{
      valid:true,
      plugin:JSON.stringify(placeholder,null,2),
      packed:JSON.stringify( nlpPlugin.pack(placeholder),null,2)
    }
  },
  computed:{
    // packed:function(){
    //   let str=JSON.stringify( nlpPlugin.pack(this.plugin),null,2)
    //   return str
    // },
    // unpacked:{
    //   get:function(){
    //     return JSON.stringify(this.plugin, null,2)
    //   },
    //   set:function(obj){
    //     console.log(typeof obj)
    //     this.plugin=JSON.parse(obj)
    //   }
    // }
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
  height:80vh;
  color:dimgrey;
  width:100%;
  display:flex;
  flex-wrap: wrap;
}
.col{
  width:50vw;
  min-width:350px;
}
textarea{
  width:300px;
  height:80%;
  text-align:left;
  border:1px solid lightgrey;
  border-radius:7px;
  /*margin-top:15px;*/
  padding:30px;
  margin-left:10px;
  color:grey;
  font-size:14px;
}
.invalid{
  border:3px solid red;
}
</style>
