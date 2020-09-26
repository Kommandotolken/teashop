<template>
  <div id="app">
  
<Top>
  
  </Top>
  <Nav link1="/" link2="/shop" link3="/about" link4="/contact" li1="index" li2="shop" li3="about" li4="contact"></Nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from './components/Nav'
import Top from './components/Top'


export default {
  name: 'App',

  components: {
Top,
Nav,

  },
  //This function is run automatically by VUE framework
  created() {
  
  }
}
</script>

<style>
body {
  
  margin: 0;
  padding: 0;
}

#app {
  width: 960px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
