<template>
  <div>
    <cover :half="true"></cover>
    <section>
      <h1>So erreichst Du mich</h1>
      <p>
        Per Mail: <a href="mailto:manuel.frick@jungegrunliberale.ch">manuel.frick@jungegrunliberale.ch</a><br>
        Per Telefon: <a href="tel:+41763184772">076 318 47 72</a>

        <br><br>
        oder auf den sozialen Medien:<br>
        Twitter: <a target="_blank"  href="https://twitter.com/m_frick">https://twitter.com/m_frick</a><br>
        Facebook: <a target="_blank"  href="https://www.facebook.com/manuel.noah.frick">https://www.facebook.com/manuel.noah.frick</a><br>
        LinkedIn: <a target="_blank"  href="https://www.linkedin.com/in/manuel-frick/">https://www.linkedin.com/in/manuel-frick/</a><br>
      </p>
    </section>
  </div>
</template>

<script>
  import Cover from '../../components/Cover'

  export default {
    name: "Contact",
    components: {
      Cover
    }
  }
</script>

<style scoped>

</style>
