<template>
  <div id="app">
    <page-header/>
    <router-view></router-view>
    <page-footer />
  </div>
</template>

<script>
  import PageHeader from './routes/Header'
  import PageFooter from "./routes/Footer";

  export default {
    name: 'app',
    components: {
      PageFooter,
      PageHeader
    }
  }
</script>

<style lang="scss">
  #app {
    @import "style/globals";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
