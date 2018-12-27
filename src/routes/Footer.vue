<template>
    <div>
      <div class="diagonal">
        <div class="bg-secondary"></div>
      </div>
      <div class="bg-secondary">
        <section>
          <p>
            <strong>Du willst dich ebenfalls für konsruktive, faktenbasierte Politik einsetzen?</strong><br>
            Schau bei den Jungen Grünliberalen oder den Grünliberalen vorbei -
            <a href="https://zurich.jungegrunliberale.ch/mitglied-werden">Jetzt mitmachen!</a>
          </p>


          <p>
            <strong>Soziale Medien</strong><br>
            Twitter: <a target="_blank"  href="https://twitter.com/m_frick">https://twitter.com/m_frick</a><br>
            Facebook: <a target="_blank"  href="https://www.facebook.com/manuel.noah.frick">https://www.facebook.com/manuel.noah.frick</a><br>
            LinkedIn: <a target="_blank"  href="https://www.linkedin.com/in/manuel-frick/">https://www.linkedin.com/in/manuel-frick/</a><br>
          </p>

          <p>Manuel frick kandidiert für die Jungen Grünliberalen sowie die Grünliberalen im Kreis 10 / Wipkingen Höngg
            für den Kantonsrat auf der Liste 4 der Grünliberalen. Auch für die Jungen Grünliberalen und somit liberale,
            konstruktive Politik kandidieren:
          </p>
            <ul>
              <li><a target="_blank" href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a target="_blank"  href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a target="_blank"  href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a target="_blank"  href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
              <li><a target="_blank"  href="https://sven.ch">Sven Sobernheim, Kandidat der Grünliberalen im Kreis 11 Zürich Oerlikon / Seebach / Affoltern</a></li>
            </ul>

          <footer>
            <p>
              <strong><a target="_blank"  href="https://zurich.jungegrunliberale.ch">Junge Grünliberale Kanton Zürich</a></strong><br>
              <router-link :to="{name: 'imprint'}">Impressum und Datenschutz</router-link>
            </p>
          </footer>
        </section>
      </div>
      <div class="logo">
        <div></div>
        <img src="./../assets/logo_glp.svg" alt="Manuel Frick">
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

  p, a, li, strong {
    color: white !important;
    font-size: $font-size-small !important;
  }

  .logo {
    position: fixed;
    right: 0;
    width: 25%;
    max-width: 200px;
    height: 8vw;
    max-height: 70px;
    bottom: 0;
    div {
      background-color: #fff;
      position: absolute;
      margin-top: 1vw;
      height: 200%;
      width: 1000%;
      left: -600%;
      transform: rotate(-10deg);
      border-top: 5px solid $secondary-color;
    }

    img {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 5px;
      right: 5px;
    }
  }
</style>
