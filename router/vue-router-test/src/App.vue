<template>
  <div id="app">
    <simple-menu/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
    import SimpleMenu from "./components/menu/Menu"
    export default {
        components: { SimpleMenu }
    }
</script>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container {
    margin-left: 200px;
    height: 100%;
    background: #f5f7fa;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
