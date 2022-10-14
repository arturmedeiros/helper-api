<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="12" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="">
            <div class="mr-4">🎉</div> Welcome to the Helper API!
          </v-card-title>
          <v-card-text>
            <p>SSR: {{ this.$store.state.configs.data }}</p>

            <p></p>
            <div class="text-xs-right">
              <em><small>&mdash; John Leider</small></em>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="px-0" justify="center" align="center">
      <v-col v-for="(item, index) in 4"
             :key="`${item}${index}`"
             :cols="isMobile
                    ? 12 : 6"
             xs="12"
             sm="12"
             md="6"
             shadow="none"
             class="cursor-pointer"
      >
        <CardHomeDefault title="IP Geolocation" subtitle="Gratuita"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AvatarWithTextInline from "@/components/cards/AvatarWithTextInline";
import CardHomeDefault from "@/components/CardHomeDefault";

export default {
  name: 'IndexPage',
  components: {
    AvatarWithTextInline,
    CardHomeDefault
  },
  data() {
    return {
      info_api: []
    }
  },
  mounted() {
    console.log("API SSR: ", this.normalizeHelper(this.$store.state.configs.data))
  },
  /* SSR Data Fetch */
  async fetch() {
    this.info_api = await fetch(
      'https://helpers.arjos.com.br/'
    )
      .then(res => res.json())
      .then((response) => {
        this.$store.commit('configs/SET_API_INFORMATION', response)
      })
  },
  /* SSR Meta SEO */
  head() {
    return {
      title: "Helper API",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Helper API with several FREE options: Geolocation by IP, Email Validator, Email List Validator, PIX QR-Code Generator, Horoscope and much more.'
        }
      ]
    }
  }
}
</script>
