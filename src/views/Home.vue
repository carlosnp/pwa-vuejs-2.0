<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="terminal">
      <div class="header-terminal"></div>
      <div class="screen-terminal">
        <div>$ npm run build</div>
        <div>$ npm install -g serve</div>
        <div>$ serve -s dist</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  .terminal{
    margin: 0;
    padding: 0;
    font: 1.3rem Inconsolata, monospace;
    text-shadow: 0 0 5px #C8C8C8;
    .header-terminal{
      width: 550px;
      height: 10px;
      box-sizing: border-box;
      height: 25px;
      background-color: #bbb;
      margin: 0 auto;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
    }
    .screen-terminal{
      background-color: #151515;
      box-sizing: border-box;
      width: 550px;
      margin: 0 auto;
      padding: 20px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      width: 550px;
      color: white;
      div {
        text-align: left;
      }
    }
  }
</style>