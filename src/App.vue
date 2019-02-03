<template>
  <div id="app">
    <vue-headful
      :title="config.title"
      :description="config.description"
      :image="require('@content/candidate_portrait.jpg')"
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
  import config from "@content/config";

  export default {
    name: 'app',
    components: {
      VueHeadful,
      PageFooter,
      PageHeader,
    },
    data() {
      return {
        config,
      };
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
