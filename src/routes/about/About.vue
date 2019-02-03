<template>
  <div>
    <cover :half="true"></cover>
    <section>
      <div class="cells">
        <div class="intro-text"  v-html="aboutLead"></div>
        <div class="portrait">
          <img src="@content/candidate_portrait.jpg" alt="Manuel Frick">
        </div>
      </div>
      <div v-html="about">
      </div>
    </section>
  </div>
</template>

<script>
  import Cover from "../../components/Cover";
  import about from "@content/about.md"
  import aboutLead from "@content/about_lead.md"

  export default {
    name: "About",
    data() {
      return {
        about,
        aboutLead
      }
    },
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

  /deep/ img {
    max-width: 90%;
  }

  /deep/ iframe {
    display: block;
    margin: auto;
  }

  /deep/ .smartspider {
    max-width: 100%;
  }
</style>
