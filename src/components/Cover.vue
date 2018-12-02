<template>
  <div class="component">
    <div class="content">
      <span>#SoIschZuekunft #progressiv</span>
      <span>Manuel Frick in den Kantonsrat</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Cover"
  }
</script>

<style scoped lang="scss">
  @import './../style/globals.scss';

  div.component {
    background: url('./../assets/index_cover.jpeg') no-repeat;
    background-size: cover;
    background-position: center;
    height: 60vh;

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
        font-size: 24px !important;
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
