<template>
  <div id="app">
    <headerNab />
    <router-view/>
  </div>
</template>

<script>
import headerNab from './components/header/header.vue'
export default {
  components:{
    headerNab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
