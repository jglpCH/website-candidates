<template>
  <div>
    <cover :half="true"></cover>
    <section>
      <h1>So erreichst Du mich</h1>
      <p>
        Per Mail: <a :href="'mailto:' + config.mail">{{ config.mail }}</a><br>
        <template v-if="config.phone">
          Per Telefon: <a :href="'tel:' + config.phoneRaw">{{ config.phone }}</a>
        </template>

        <br><br>
        oder auf den sozialen Medien:<br>
        <template v-if="config.twitter">
          Twitter: <a target="_blank"  :href="config.twitter">
            {{ config.twitter }}
            </a><br>
        </template>
        <template v-if="config.facebook">
          Facebook: <a target="_blank"  :href="config.facebook">
            {{ config.facebook }}
            </a><br>
        </template>
        <template v-if="config.instagram">
          Instagram: <a target="_blank"  :href="config.instagram"> {{ config.instagram }}
            </a><br>
        </template>
        <template v-if="config.linkedin">
          LinkedIn: <a target="_blank"  :href="config.linkedin">{{ config.linkedin }}
            </a><br>
        </template>
      </p>
    </section>
  </div>
</template>

<script>
  import Cover from '../../components/Cover'
  import config from "@content/config";


  export default {
    name: "Contact",
    components: {
      Cover
    },
    data() {
      return {
        config,
      }
    }
  }
</script>

<style scoped>

</style>
