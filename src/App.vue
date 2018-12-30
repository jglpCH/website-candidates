<template>
  <div id="app">
    <vue-headful
      title="Dein Kantonsrat für konstruktive, fortschrittliche und nachhaltige Politik."
      description="Ich kandidiere Kreis 10 (Wipkingen, Höngg, Unterstrass, Oberstrass) und setze mich mit viel Herzblut
      für die Energiewende, Innovation und Chancengleichheit ein."
    />
    <page-header/>
    <router-view></router-view>
    <page-footer />
  </div>
</template>

<script>
  import PageHeader from './routes/Header'
  import PageFooter from "./routes/Footer";
  import VueHeadful from "vue-headful";

  export default {
    name: 'app',
    components: {
      VueHeadful,
      PageFooter,
      PageHeader
    }
  }
</script>

<style lang="scss">
  #app {

    ul {
      list-style: square outside url('./assets/list-icon.png');
    }
    @import "style/globals";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
