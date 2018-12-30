<template>
  <div>
    <cover></cover>
    <section>
      <div class="cells">

        <div class="intro-text">
          <h1>Politik mit Herz, Verstand und Weitsicht</h1>
          <h2>Dein Vertreter für einen innovativen Kanton Zürich</h2>
          <p>Als Co-Präsident der jglp Kanton Zürich und Mitglied der Geschäftsleitung der jglp Schweiz setze ich mich mit
            viel Engagement für eine verträgliche, aber konsequente Energiewende sowie eine innovative und moderne
            Wirtschaft ein.</p>
          <router-link class="button" :to="{name: 'about'}">Mehr über mich</router-link>
        </div>
        <div class="portrait">
          <div class="badge">
            <span>Liste</span>
            <span>4</span>
          </div>
          <img src="./../../assets/candidate_portrait.jpg" alt="Manuel Frick">
        </div>
      </div>
      <h1>Dafür setze ich mich ein</h1>
      <p>
        Faire, liberale Politik welche stets das Wohl der Gesamtgesellschaft als Optimum verfolgt sowie kommende
        Generationen
        respektiert - das ist mein Kompass.</p>
      <h2>Energiewende, Digitalisierung, Chancengleichheit</h2>
      <p>
        ... sind die Themen, für welche ich mich engagiere. Wie ich mir das genau vorstelle, siehst du in meinen Positionen.

      </p>
      <p>
        <router-link class="button" :to="{name: 'positions'}">Positionen</router-link>
      </p>

      <h1>Liste 4 Grünliberale am 24. März 2019</h1>
      <p>
        Wirf die Liste 4 ein und unterstütze unsere progressive und konstruktive Politik. Als Regierungsrat empfehle
        ich <a target="_blank" href="https://www.joergmaeder.ch/">Jörg Mäder</a>, welcher durch seine digitale Expertise und politische Erfahrung die ideale Besetzung für ein
        Zürich von morgen ist.
      </p>
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
    position: relative;
    img {
      width: 100%;
    }

    .badge {
      background-color: $secondary-color;
      color: white;
      position: absolute;
      bottom: 10%;
      right: 10%;
      text-align: center;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      padding: 20px;
      justify-content: center;
      transform: rotate(15deg);
      font-family: $heading-font;

      span:nth-child(1) {
        font-size: 25px;
        line-height: 25px;
      }

      span:nth-child(2) {
        font-size: 40px;
        line-height: 40px;
      }
    }
  }

  .cells {
    flex-wrap: wrap-reverse;
    justify-content: center;
  }
</style>
