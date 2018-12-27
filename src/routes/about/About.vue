<template>
  <div>
    <cover half="true"></cover>
    <section>
      <div class="cells">
        <div class="intro-text">
          <h1>So bin ich</h1>
        <p>Geboren im Jahr 1989 bin ich mit kurzem Schlenker via Männedorf in Zürich Oerlikon aufgewachsen. Heute
        setze ich mich in vielen Projekten und der Politik für eine fortschrittliche, digitale und
        nachhaltige Schweiz ein.</p>
        </div>
        <div class="portrait">
          <img src="./../../assets/candidate_portrait.jpg" alt="Manuel Frick">
        </div>
      </div>
      <h1>Politik</h1>
      <p>Vor vier Jahren bin ich in die GLP eingetreten. Kurz darauf wurden die Jungen Grünliberalen Schweiz und 3 Monate später die Zürcher Sektion gegründet, worauf
        ich mich sofort engagierte. Ein Jahr später wurde ich ins Co-Präsidum der jglp Zürich gewählt und habe seitdem
      wesentlich dazu beigetragen, die jglp zu einer festen Grösse in der Politik-Landschaft zu machen. Zähle die jglp
        Zürich anfangs eine Handvoll aktive Mitglieder, beschäftigen wir heute rund 40 Freiwillige.</p>
      <h2>Ämter</h2>
      <ul>
        <li>Vorstand Grünliberale Kanton Zürich</li>
        <li>Co-Präsidium Junge Grünliberale Kanton Zürich</li>
        <li>Geschäftsleitung und Vorstand Junge Grünliberale Schweiz (Kreativchef / Marketing)</li>
      </ul>
      <h2>Kampagnen</h2>
      <ul>
        <li>Taxigesetz (Leitung der Kampagne)</li>
        <li>Energiestrategie (Co-Leitung und Ideengenerator)</li>
        <li>Nachtnetz am Donnerstag in Zürich</li>
      </ul>
      <h1>Smartspider</h1>
      <p class="center">
        <img src="../../assets/smartspider.png" class="smartspider" alt="Manuel Frick"></p>
      <h1>Privat</h1>
      <p>Squash, Badminton, Philosophie, kreativ</p>
      <h1>Beruf</h1>
      <p>Während meiner Lehre zum Systemtechniker entdeckte ich die Macht der digitalen Welt, worauf ich das Studium in
      Informatik anpackte und erfolgreich absolvierte. Nach einigen Jahren in der klassischen Software-Entwicklung
      setzte ich mich nun auch beruflich für die Energiewende ein: Im Innovationslabor der Alpiq verfolge ich neue
        Geschäftsmodelle und Cleantech-Themen.</p>
      <ul>
        <li>Software Engineer im Innovationslabor Oyster Lab by Alpiq</li>
        <li>Mitgründer bei Suncrowd, einem Startup-Projekt im Energiebereich</li>
        <li>Software Engineer bei Ergon Informatik AG</li>
        <li>Migründer & Software Engineer bei elinica communications GmbH</li>
        <li>Studium Informatik Vertiefung Software-Engineering an der ZHAW</li>
        <li>Berufslehre Informatik Vertiefung Systemtechnik</li>
      </ul>
      <h1>Ich in fünf Worten</h1>
      <ul>
        <li>Engagiert</li>
        <li>Kreativ</li>
        <li>Ganzheitlich</li>
        <li>Optimistisch</li>
        <li>Freiheitlich</li>
      </ul>
    </section>
  </div>
</template>

<script>
  import Cover from "../../components/Cover";

  export default {
    name: "About",
    components: {Cover}
  }
</script>

<style scoped lang="scss">
  .portrait {
    padding: 0 30px;
    flex: 1 0 30%;
    max-width: 50%;
    img {
      width: 100%;
    }
    min-width: 200px;
  }

  .intro-text {
    flex: 2 0 30%;
    min-width: 300px;
  }

  .cells {
    flex-wrap: wrap;
    justify-content: center;
  }

  .smartspider {
    max-width: 100%;
  }
</style>
