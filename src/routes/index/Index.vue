<template>
  <div>
    <cover></cover>
    <div class="lead">
      <section class="cells">
        <div>
          <h1>Dein Vertreter für einen innovativen Kanton Zürich</h1>
          <p>Als Co-Präsident der jglp Zürich und Mitglied der Geschäftsleitung der jglp Schweiz setze ich mich mit
          viel Engagement für eine marktverträgliche, aber konsequente Energiewende sowie eine innovative und moderne
          Wirtschaft ein.</p>
          <router-link class="button" :to="{name: 'about'}">Mehr über mich</router-link>
        </div>
        <div class="portrait">
          <img src="./../../assets/candidate_portrait.jpg">
        </div>
      </section>
    </div>

    <section>
      <h1>Dafür setze ich mich ein</h1>
      <p>
        Faire, liberale Politik welche stets das Wohl der Gesellschaft im Auge behält sowie kommende Generationen
        respektiert - das ist mein Kompass.</p>
      <p>
        Wie ich mir das genau vorstelle, siehst du in meinen Positionen.
      </p>
      <router-link class="button" :to="{name: 'positions'}">Positionen</router-link>
    </section>
  </div>
</template>

<script>
  import Cover from '../../components/Cover'

  export default {
    name: "Index",
    components: {
      Cover
    }
  }
</script>

<style scoped lang="scss">
  @import './../../style/globals.scss';

  .lead {
    background-color: $primary-color;
    color: white;
    h1 {
      background-color: transparent !important;
    }
    .portrait {
      padding: 0 30px;
      flex: 1 0 30%;
      img {
        width: 100%;
      }
    }
  }
</style>
