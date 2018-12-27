<template>
  <div>
    <cover :half="true"></cover>
    <section>
      <h1>
        Impressum
      </h1>
      <p>
        Blablas
      </p>
      <h1>Datenschutz</h1>
      <p>

      </p>
    </section>

  </div>
</template>

<script>
  import Cover from '../components/Cover';

  export default {
    name: "Imprint.vue",
    components: {
      Cover
    }
  }
</script>

<style scoped>

</style>
