<template>
  <div>
    <cover :half="true"></cover>
    <section>
      <h1>
        Impressum
      </h1>
      <p></p>
      <h2>Gesamtverantwortung</h2>
      <p>Junge Grünliberale Kanton Zürich<br>
      Zurlindestrasse 134<br>
      8003 Zürich</p>
      <h2>Umsetzung</h2>
      <p>
        <a href="https://manuel-frick.ch">Manuel Frick</a>
      </p>
      <h1>Datenschutz</h1>
      <p>
        Ihre persönlichen Daten werden bei uns nur für interne Zwecke verwendet. Wir geben keine Adressen an andere Organisationen weiter und erfüllen die gesetzlichen Anforderungen des Datenschutzes.
      </p>
      <h2>Erhebung / Verarbeitung personenbezogener Daten
      </h2>
      <p>
        Sie stellen keinerlei persönliche Informationen zur Verfügung, wenn Sie sich auf dieser Webseite nur
        informieren möchten. Wenn Sie bestimmte Dienstleistungen (z.B. Online-Aktionen, Newsletter-Abonnement) in
        Anspruch nehmen, werden zur ordnungsgemässen Abwicklung einige persönliche Daten benötigt. Durch Ihre Anmeldung
        zu den jeweiligen Dienstleistungen geben Sie Ihr Einverständnis dazu, dass Ihre personenbezogenen Daten zu den
        jeweils genannten Zwecken erhoben, verarbeitet und genutzt werden dürfen.
      </p>
      <h2>Google Analytics</h2>
      <p>
        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. Google Analytics ermöglicht
        es uns, die Nutzung der Webseite durch BesucherInnen zu analysieren und unsere Angebote zu verbessern. Dazu
        werden Informationen über die Webseitennutzung (einschliesslich der IP-Adresse der BesucherInnen) an einen
        Google-Server in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um die
        Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber
        zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen
        zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich
        vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall
        Ihre IP- Adresse mit anderen Daten der Google Inc. in Verbindung bringen. Falls Sie nicht möchten, dass Ihre
        Daten von Google Analytics verwendet werden, deaktivieren Sie bitte die „Cookies“-Annahme durch eine
        entsprechende Einstellung Ihrer Browser Software. Unter Umständen sind dann nicht mehr sämtliche Funktionen
        dieser Website voll umfänglich nutzbar. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung
        der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten
        Zweck einverstanden.
      </p>
    </section>

  </div>
</template>

<script>
  import Cover from '../components/Cover';

  export default {
    name: "Imprint.vue",
    components: {
      Cover
    }
  }
</script>

<style scoped>

</style>
