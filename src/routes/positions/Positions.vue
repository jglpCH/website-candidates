<template>
    <div>
      <cover :half="true"></cover>
      <section v-html="positions">
      </section>
    </div>
</template>

<script>
    import Cover from "../../components/Cover";
    import positions from "@content/positions.md"

    export default {
        name: "Positionen",
      data() {
          return {
            positions
          }
      },
      components: {Cover}
    }
</script>

<style scoped lang="scss">
  @import './../../style/globals.scss';


  /deep/ .icons {
    padding-bottom: $spacing-40;
    justify-content: space-evenly;
    img {
      display: block;
      flex: 0 1 20%;
      background-color: $secondary-color;
      border-radius: 50%;
      padding: 10px;
      width: 20vw;
      height: 20vw;
      max-height: 150px;
      max-width: 150px;
      margin: 10px;
    }
  }
  .smartspider {
    max-width: 100%;
  }

</style>
