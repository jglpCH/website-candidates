<template>
  <div class="component"  :class="{'half': half}" :style="'background-image: url(' + config.leadImage + ');'">

    <div class="content">
      <span>#SoIschZuekunft #progressiv</span>
      <span>{{ config.name}} in den Kantonsrat</span>
    </div>
  </div>
</template>

<script>
  import config from '@content/config';

  export default {
    name: "Cover",
    data(){
      return {
        config,
      }
    },
    props: {
      half: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="scss">
  @import './../style/globals.scss';

  div.component {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 44vh;
    position:relative;

    &.half {
      height: 30vh;
    }


    .content {
      // max-width: $max-width;
      position: relative;
      height: 100%;
      margin: auto;

      span {
        position: absolute;
        display: block;
        right: 0;
        color: white;
        @include css-lock(22, 24, 400, 1200, font-size);
        padding: 10px 20px;
        font-family: $heading-font !important;

        &:first-child {
          bottom: calc(10% + 24px * 3);
          background-color: $primary-color;
        }
        &:nth-child(2) {
          bottom: 10%;
          text-transform: uppercase;
          background-color: $secondary-color;
        }
      }
    }
  }
</style>
