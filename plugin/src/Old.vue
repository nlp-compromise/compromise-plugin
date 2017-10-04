<template>
  <div id="app">
    <div id="top" v-bind:style="{'flex-basis':top+'%'}">
      <div id="left">
        <a href="http://compromise.cool">nlp-compromise</a>
        <br/>
        can compress word data in crafty ways
      </div>
      <div id="right">
        <a href="https://github.com/nlp-compromise/compromise/wiki/Plugin">
          plugin docs
        </a>
      </div>
      <textarea id="bigger">
        {{JSON.stringify(plugin,null,2)}}
      </textarea>
    </div>
    <div id="bottom" v-bind:style="">
      <div id="button" v-on:click="toggleView">
        <div>
          compress plugin
        </div>
        <div>
          ▼
        </div>
      </div>
      <textarea id="smaller">
          {{JSON.stringify(plugin,null,2)}}
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    toggleView:function(){
      if(this.top===85){
        this.top=15
      }else{
        this.top=85
      }
    }
  },
  data () {
    return {
      top:85,
      plugin:{
        words:{
          strawberry: 'fruit',
          blueberry: 'fruit',
          blackberry: 'fruit',
          tomato: ['fruit', 'vegetable'],
          cucumber: 'vegetable',
          pepper: ['vegetable', 'spicy'],
          salad: ['fruit', 'vegetable', 'sour']
        }
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
  flex-direction: column;
}

#top {
  background-color:white;
  flex:1 0 100px;
  transition: flex-basis 300ms ease-in-out;
}
#bigger{
  width:80%;
  height:80%;
  margin-top:5%;
  border:2px solid darkgrey;
  padding:30px;
  border-radius:7px;
  font-size:25px;
}
#left{
  position:absolute;
  left:30px;
  top:10px;
  width:350px;
}
#right{
  position:absolute;
  right:30px;
  top:10px;
  width:350px;
}


#bottom {
  background-color:#F4F5F1;
  border-top:4px solid darkgrey;
  flex:1 0 100px;
  overflow:hidden;
}
#button{
  display:inline-block;
  cursor:pointer;
  z-index:4;
  margin-top:-20px;
  background-color:steelblue;
  border:1px solid #5781D4;
  color:white;
  font-size:25px;
  border-radius:7px;
  padding:3px 30px 3px 30px;
}
#button:hover{
  background-color:#5781D4;
}
#smaller{
  background-color:#F4F5F1;
  top:-15px;
  width:80%;
  height:80%;
  border:2px solid darkgrey;
  padding:30px;
  border-radius:7px;
  font-size:25px;
}
</style>
