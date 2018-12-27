<template>
    <div>
      <cover half="true"></cover>
      <section>
        <h1>Dafür stehe ich ein</h1>
        <p>
          Faire, liberale Politik welche stets das Wohl der Gesellschaft im Auge behält sowie kommende Generationen
          respektiert - das ist mein Kompass.</p>
        <h2>1. MIT HERZBLUT FÜR DIE ENERGIEWENDE</h2>
        <p>
          Klimaerwärmung und Ressourcenverbrauch sind die Herausforderungen für die Zukunft -
          packen wir sie entschlossen an!
        </p>
        <p>
          Ich setze mich für CO2-Gesetze, Cleantech und eine rasche aber verträgliche Transformation von fossilen zu
          erneurbaren Energien ein. Ich engagiere mich gegen einen Ausbau des fossilen Verkehrs,
        </p>
        <div class="cells icons">
          <img src="./../../assets/noun_cycle_1696644_ffffff.svg">
          <img src="./../../assets/noun_renewable_1962539_ffffff.svg">
          <img src="./../../assets/noun_Lesbian_1459102_ffffff.svg">
        </div>
        <h2>2. INNOVATION UND DIGITAL - BEREIT FÜR DIE ZUKUNFT</h2>
        <p>
          Innovation nützt der Gesellschaft - sie verbessert die Angebote, fordert grosse Player heraus und stärkt die
          Wettbewerbsfähigkeit.
        </p>
        <p>
          Ich setze mich für Startups und schlanke Regulierungen ein und engagiere mich vehement gegen Klientelpolitik,
          Branchenschutz, Protektionismus und Filzpolitik.
        </p>
        <div class="cells icons">
          <img src="./../../assets/noun_cycle_1696644_ffffff.svg">
          <img src="./../../assets/noun_renewable_1962539_ffffff.svg">
          <img src="./../../assets/noun_Lesbian_1459102_ffffff.svg">
        </div>
        <h2>3. LIBERALE CHANCENKULTUR</h2>
        <p>Jeder Mensch hat eine faire Chance verdient, und jeder Mensch soll sich mit persönlichen Einsatz alles
          erreichen können- ohne Schikane und mit garantiert fairer Behandlung durch den Staat.
        </p>
        <p>
          Ich setze mich für starke Bildung, Starthilfe für sozial Benachteiligte und für starke und faire
          Institutionen ein. Ich engagiere mich gegen die Schwächung des Rechtstaates und der Privatsphäre sowie
          gegen staatliche Schikane in jeglicher Form.
        </p>
        <div class="cells icons">
          <img src="./../../assets/noun_cycle_1696644_ffffff.svg">
          <img src="./../../assets/noun_renewable_1962539_ffffff.svg">
          <img src="./../../assets/noun_Lesbian_1459102_ffffff.svg">
        </div>
        <h2>4. VELO FIRST, AUTO SECOND</h2>
        <p>
          Das Auto ist von vorgestern - smarte Verkehrslösungen sind angesagt. Ob Carsharing, Carpooling, Freefloating
          E-Bikes, autonomes Fahren oder das klassische Velo - diesen Themen gehört die Verkehrszukunft.
        </p>
        <p>
          Ich setze mich ein für verursachergerechte Abgaben, Velowege und Elektromobilität. Ich engagiere mich gegen
          die Zubetonierung unser Landschaft, Klotzen-Statt-Denken-Mentalität und Regulierungswut, welche Innovation
          in diesem Bereich verhindert.
        </p>
        <div class="cells icons">
          <img src="./../../assets/noun_cycle_1696644_ffffff.svg">
          <img src="./../../assets/noun_renewable_1962539_ffffff.svg">
          <img src="./../../assets/noun_Lesbian_1459102_ffffff.svg">
        </div>
        <h1>Smartspider</h1>
        <p class="center"><img src="../../assets/smartspider.png"  class="smartspider"></p>
      </section>
    </div>
</template>

<script>
    import Cover from "../../components/Cover";
    export default {
        name: "Positionen",
      components: {Cover}
    }
</script>

<style scoped lang="scss">
  @import './../../style/globals.scss';


  .icons {
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
