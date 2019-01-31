<template>
  <div>
    <cover></cover>
    <section>
      <div class="cells">
        <div class="intro-text">
          <div v-html="indexLead"></div>
          <router-link class="button" :to="{name: 'about'}">Mehr über mich</router-link>
        </div>
        <div class="portrait">
          <div>
            <img src="@content/candidate_portrait.jpg" :alt="config.name">
            <div class="badge">
              <span>Liste</span>
              <span>4</span>
            </div>
          </div>

        </div>
      </div>
      <div>
        <div v-html="indexPositions">
        </div>
        <p>
          <router-link class="button" :to="{name: 'positions'}">Positionen</router-link>
        </p>
        <div v-html="index">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Cover from '../../components/Cover'
  import index from '@content/index.md'
  import indexLead from '@content/index_lead.md'
  import indexPositions from '@content/index_positions.md'
  import config from '@content/config';

  export default {
    name: "Index",
    data() {
      return {
        index,
        indexLead,
        indexPositions,
        config
      }
    },
    components: {
      Cover
    }
  }
</script>

<style scoped lang="scss">
  @import './../../style/globals.scss';

  .intro-text {
    flex: 2 0 30%;
    min-width: 300px;

    /deep/ h1 {
      margin-bottom: 10px !important;
    }
  }

  .portrait {
    padding: 0 30px;
    flex: 1 0 30%;
    min-width: 200px;
    //max-width: 50%;
    div {
      position: relative;
    }

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
