<template>
  <nav>
    <h1>Nav</h1>
    <ul>
      <!--<li><router-link to={{link1}}>{{li1}}</router-link></li>
      <li><router-link to={{link2}}>{{li2}}</router-link></li>
      <li><router-link to={{link3}}>{{li3}}</router-link></li>
      <li><router-link to={{link4}}>{{li4}}</router-link></li>-->
      <router-link to="/">Index</router-link>
      <router-link to="/">Index</router-link>
      <router-link to="/">Index</router-link>
      <router-link to="/">Index</router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  props: {
    li1: String,
    li2: String,
    li3: String,
    li4: String,
    link1: String,
    link2: String,
    link3: String,
    link4: String
  }
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

header {
  border: 2px solid black;
  height: 200px;
  background-image: url("./16491057940_eec8aaf10a_o.jpg");
  object-fit: fill;
  background-repeat: no-repeat;
}
</style>