<template>
  <div>
    <cover :half="true"></cover>
    <section>
      <div class="cells">
        <div class="intro-text">
          <h1>Das bin ich</h1>
        <p>Geboren im Jahr 1989 bin ich mit kurzem Schlenker via Männedorf in Zürich Oerlikon aufgewachsen. Seit ein paar Jahren
          wohne ich in Wipkingen und arbeite im Innovationslabor der Alpiq in Zürich.</p>
        </div>
        <div class="portrait">
          <img src="./../../assets/candidate_portrait.jpg" alt="Manuel Frick">
        </div>
      </div>
      <h1>Politik</h1>
      <p>
        Schon in jungen Jahren politisch interessiert, habe ich aber lange mit der Wahl einer Partei gehadert. Im Jahr
        2015 bin ich schlussendlich den Grünliberalen beigetreten, da ich unsere Zukunft bezüglich des Klimawandels
        und der Energiepolitik wegen des bürgerlichen
        Rechtsrutsch gefährdet sah.</p>
      <p>
        Kurz darauf wurden die Jungen Grünliberalen Schweiz und
        drei Monate später die Zürcher Sektion gegründet, worauf
        ich mich sofort engagierte. Ein Jahr später wurde ich ins Co-Präsidum der jglp Zürich gewählt und habe seitdem
      wesentlich dazu beigetragen, die jglp zu einer festen Grösse in der Politik-Landschaft zu machen. Zählte die jglp
        Zürich anfangs eine Handvoll aktiver Mitglieder, arbeiten heute fast 40 Freiwillige ehrenamtlich für eine
      nachhaltige und fortschrittliche Zukunft.</p>
      <h2>Ämter</h2>
      <ul>
        <li>Vorstand Grünliberale Kanton Zürich seit 2017</li>
        <li>Co-Präsidium Junge Grünliberale Kanton Zürich seit 2017</li>
        <li>Geschäftsleitung und Vorstand Junge Grünliberale Schweiz (Kreativchef / Marketing) seit 2017</li>
      </ul>
      <h2>Kampagnen & Themen</h2>
      <ul>
        <li>Taxigesetz</li>
        <li>Energiestrategie (Co-Leitung und Ideengenerator)</li>
        <li>Nachtnetz am Donnerstag in Zürich</li>
      </ul>
      <h1>Smartspider</h1>
      <p class="center">
        <img src="../../assets/smartspider.png" class="smartspider" alt="Manuel Frick"></p>
      <h1>Privat</h1>
      <p>Squash, Badminton, Philosophie, Reisen</p>
      <h1>Beruf</h1>
      <p>Während meiner Lehre zum Systemtechniker entdeckte ich die Macht der digitalen Welt, worauf ich das Studium in
      Informatik anpackte und erfolgreich absolvierte. Nach einigen Jahren in der klassischen Software-Entwicklung
      setzte ich mich nun auch beruflich für die Energiewende ein: Im Innovationslabor der Alpiq verfolge ich neue
        Geschäftsmodelle und Cleantech-Themen.</p>
      <ul>
        <li>Software Engineer im Innovationslabor Oyster Lab by Alpiq</li>
        <li>Mitgründer bei Suncrowd, einem Startup-Projekt im Energiebereich</li>
        <li>Software Engineer bei Ergon Informatik AG</li>
        <li>Mitgründer & Software Engineer bei elinica communications GmbH</li>
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
