<template>
  <div>
    <cover></cover>
    <section>
      <div class="cells">
        <div class="intro-text">
          <h1>Politik mit Herz, Verstand und Weitsicht</h1>
          <h2>Dein Vertreter für einen innovativen Kanton Zürich</h2>
          <p>Als Co-Präsident der jglp Zürich und Mitglied der Geschäftsleitung der jglp Schweiz setze ich mich mit
            viel Engagement für eine marktverträgliche, aber konsequente Energiewende sowie eine innovative und moderne
            Wirtschaft ein.</p>
          <router-link class="button" :to="{name: 'about'}">Mehr über mich</router-link>
        </div>
        <div class="portrait">
          <img src="./../../assets/candidate_portrait.jpg">
        </div>
      </div>
      <h1>Dafür setze ich mich ein</h1>
      <p>
        Faire, liberale Politik welche stets das Wohl der Gesamtgesellschaft als Optimum verfolgt sowie kommende
        Generationen
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


  h1 {
    margin-bottom: 10px !important;
  }

  .intro-text {
    flex: 2 0 30%;
    min-width: 300px;
  }

  .portrait {
    padding: 0 30px;
    flex: 1 0 30%;
    min-width: 200px;
    //max-width: 50%;
    img {
      width: 100%;
    }


    .cells {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }
  }
</style>
