<template>
    <div>
      <div class="diagonal">
        <div></div>
      </div>
      <div class="bg-primary">
        <section>
          <p>Manuel frick kandidiert für die Jungen Grünliberalen sowie die Grünliberalen im Kreis 10 / Wipkingen Höngg
            für den Kantonsrat auf der Liste 4 der Grünliberalen. Auch für die Jungen Grünliberalen und somit liberale,
            konstruktive Politik kandidieren:
          </p>
            <ul>
              <li><a href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
            </ul>

          <footer>
            <p>
              <strong>Junge Grünliberale Kanton Zürich</strong>

            </p>
          </footer>
        </section>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  @import './../style/globals.scss';

  .diagonal {
    width: 100%;
    height: calc(100vw * 0.18);
    overflow: hidden;
    div {
      width: 300%;
      position: relative;
      left:-50%;
      height: 100%;
      transform: rotate(-10deg);
      background-color: $primary-color;
    }
  }

  section {
    padding-top: $spacing-10 !important;
  }

  p, a, li {
    color: white;
    font-size: $font-size-small !important;
  }
</style>
