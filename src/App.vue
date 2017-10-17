<template>
  <div id="app">
    <div class="col">
      <div>a big
        <a href="https://github.com/nlp-compromise/compromise-plugin">Compromise plugin</a>
      </div>
      <textarea v-model="unpacked" placeholder="{}"></textarea>
    </div>
    <div class="col">
      <div>a tiny, compressed version</div>
      <textarea v-model="packed" placeholder="{}"></textarea>
    </div>
  </div>
</template>

<script>
var nlpPlugin=require('compromise-plugin');
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
  height:100vh;
  width:100%;
  display:flex;
}
.col{
  width:50vw;
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
