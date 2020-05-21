<template>
  <div id="app">
    <!--<HelloWorld/>-->
    <!--<br/>-->
    <!--<checkboxE/>-->
    <!--<selectE/>-->
    <!--<timeSelectE/>-->
    <datePicker/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld:()=>import("./components/HelloWorld"),
    // radioE:()=>import('./components/radio'),
    //   checkboxE:()=>import('./components/checkbox'),
    //   inputE:()=>import('./components/input'),
    //   selectE:()=>import('./components/select'),
    //   timeSelectE:()=>import('./components/timeSelect'),
      datePicker:()=>import('./components/datePicker'),

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
  margin-top: 60px;
}
</style>
