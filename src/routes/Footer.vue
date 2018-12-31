<template>
    <div>
      <div class="diagonal">
        <div class="bg-secondary"></div>
      </div>
      <div class="bg-secondary">
        <section>
          <p>
            <strong>Du willst dich ebenfalls für konstruktive, faktenbasierte Politik einsetzen?</strong><br>
            Schau bei den Jungen Grünliberalen oder den Grünliberalen vorbei -
            <a href="https://zurich.jungegrunliberale.ch/mitglied-werden">Jetzt mitmachen!</a>
          </p>


          <p class="some">
            <strong>Soziale Medien</strong><br>
            <a target="_blank"  href="https://twitter.com/m_frick">
              <img alt="Manuel Frick auf Twitter" src="./../assets/some_twitter.svg"></a>
            <a target="_blank"  href="https://www.facebook.com/manuel.noah.frick">
              <img alt="Manuel Frick auf Facebook" src="./../assets/some_facebook.svg"></a>
            <a target="_blank"  href="https://www.linkedin.com/in/manuel-frick/">
              <img alt="Manuel Frick auf LinkedIn" src="./../assets/some_linkedin.svg"></a>
          </p>

          <p>
            <strong>Kontakt</strong><br>
            <router-link :to="{name: 'contact'}">Kontaktiere mich</router-link>
          </p>

          <p>Manuel Frick kandidiert für die Jungen Grünliberalen sowie die Grünliberalen im Kreis 10 / Wipkingen Höngg
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
              <router-link :to="{name: 'imprint'}">Impressum und Datenschutz</router-link><br>

            </p>
          </footer>
        </section>
      </div>
      <div class="logo">
        <div></div>
        <a href="https://zurich.jungegrunliberale.ch" target="_blank">
        <img src="./../assets/logo_glp.svg" alt="Junge Grünliberale Kanton Zürich"></a>
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

  .some {
    img {
      height:60px;
      margin-right: 30px;
    }
  }

  .logo {
    position: fixed;
    right: 0;
    width: 25%;
    max-width: 200px;
    height: 8vw;
    max-height: 70px;
    bottom: 0;

    @media (max-width: 600px) {
      height: 10vw;
    }
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
