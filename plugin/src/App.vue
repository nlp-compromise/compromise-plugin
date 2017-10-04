<template>
  <div id="app">
  <textarea v-model="plugin" placeholder="{}"></textarea>
  <textarea v-model="plugin" placeholder="{}"></textarea>
</div>
</template>

<script>
var nlpPlugin=require('/Users/spencer/nlp/plugin');
console.log(nlpPlugin)
export default {
  name: 'app',
  methods:{},
  data () {
    let plugin={
      plugin:{
        words:{
          strawberry: 'Fruit',
          blueberry: 'Fruit',
          blackberry: 'Fruit',
          tomato: ['Fruit', 'Vegetable'],
          cucumber: 'Vegetable',
          pepper: ['Vegetable', 'Spicy'],
          salad: ['Fruit', 'Vegetable']
        }
      }
    }
    return {
      plugin:JSON.stringify(plugin, null,2)
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
