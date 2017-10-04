<template>
  <div id="app">
  <textarea v-model="unpacked" placeholder="{}"></textarea>
  <textarea v-model="packed" placeholder="{}"></textarea>
</div>
</template>

<script>
var nlpPlugin=require('/Users/spencer/Desktop/compromise-plugin/index.js');
var placeholder=require('./plugin');
export default {
  name: 'app',
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
        console.log(obj)
        this.plugin=obj
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
  text-align: center;
  margin:0px;
  padding:0px;
  width:100%;
  height:100vh;
  display:flex;
}
textarea{
  width:80%;
  height:80%;
  margin-top:5%;
  border:2px solid darkgrey;
  padding:30px;
  border-radius:7px;
  color:grey;
  font-size:18px;
}
</style>
