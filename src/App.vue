<template>
  <div id="app">
    <page-header />
      <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './routes/Header'

export default {
  name: 'app',
  components: {
    HelloWorld,
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
