<template>
    <div>
      <div class="diagonal">
        <div class="bg-secondary"></div>
      </div>
      <div class="bg-secondary">
        <section>
          <p>
            <strong>Du willst dich ebenfalls für konstruktive, faktenbasierte Politik einsetzen?</strong><br>
            Schau bei den Jungen Grünliberalen oder den Grünliberalen vorbei!<br>
            <a class="button" href="https://zurich.jungegrunliberale.ch/mitglied-werden">Jetzt mitmachen!</a>
          </p>
          <p class="some">
            <strong>Finde mich in den sozialen Medien!</strong><br><br>
            <template v-if="config.twitter">
              <a target="_blank"  :href="config.twitter">
                <img :alt="config.name + 'auf Twitter'" src="./../assets/some_twitter.svg"></a>
            </template>
            <template v-if="config.facebook">
              <a target="_blank"  :href="config.facebook">
                <img :alt="config.name + ' auf Facebook'" src="./../assets/some_facebook.svg"></a>
            </template>
            <template v-if="config.instagram">
              <a target="_blank"  :href="config.instagram">
                <img :alt="config.name + ' auf Instagram'" src="./../assets/some_instagram.svg"></a>
            </template>
            <template v-if="config.linkedin">
              <a target="_blank"  :href="config.linkedin">
                <img :alt="config.name + ' auf LinkedIn'" src="./../assets/some_linkedin.svg"></a>
            </template>
          </p>

          <p>
            <strong>Kontakt</strong><br>
            <router-link :to="{name: 'contact'}">Kontaktiere mich</router-link>
          </p>

          <p>{{config.name }} kandidiert für die <a target="_blank" href="https://zurich.jungegrunliberale.ch/">Jungen Grünliberalen</a> sowie die <a target="_blank" href="https://zh.grunliberale.ch">Grünliberalen</a> im Wahlbezirk {{ config.bezirk }}
            ( {{config.keywords }})
            für den Kantonsrat auf der Liste 4 der Grünliberalen. Auch für die Jungen Grünliberalen und somit liberale,
            konstruktive Politik kandidieren:
          </p>
            <ul>
              <li v-for="candidate in candidates"><a target="_blank" :href="candidate.url">{{ candidate.name}} für die Grünliberalen im Wahlbezirk {{ candidate.district}}</a></li>
            </ul>

          <footer>
            <p>
              <strong>&copy; <a target="_blank"  href="https://zurich.jungegrunliberale.ch">Junge Grünliberale Kanton Zürich, jglp Zürich</a></strong><br>
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
    import config from "@content/config";
    import candidates from "../content/candidates";

    export default {
        name: "Footer",
        data() {
          return {
            config,
            candidates,
          }
        }
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

  .button {
    background-color: white !important;
    color: $secondary-color !important;
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
