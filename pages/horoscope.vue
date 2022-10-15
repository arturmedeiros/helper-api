<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="8" lg="8" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-star-shooting-outline</v-icon>
            </div>
            Choose a sign
          </v-card-title>
          <v-card-text>
            <div v-if="loading"
                 class="justify-center align-center"
                 style="height: 50px; display: flex;">
              <div >
                Loading...
              </div>
            </div>
            <div v-else class="pt-3">
              <v-sheet
                class="mx-auto"
                max-width="100%"
              >
                <v-slide-group
                  multiple
                  show-arrows
                  class="mx-0 "
                >
                  <v-slide-item
                    v-for="(signName, index) in getSigns.signId.option"
                    :key="index"
                  >
                    <v-btn
                      class="mx-2"
                      active-class="purple white--text"
                      depressed
                      rounded
                      @click="getSign(signName)"
                    >
                      {{ signName }}
                    </v-btn>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </div>
          </v-card-text>
<!--          {{ sign }}-->
          <v-card-text v-if="sign && $store.state.horoscope.data">
            <Code type="sign" :data="sign"/>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import Code from "@/components/Code";

export default {
  name: 'Horoscope',
  components: {
    // Code
  },
  /* SSR */
  head() {
    return {
      title: "Horoscope by Sign - Helper API",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Helper API with several FREE options: Geolocation by IP, Email Validator, Email List Validator, PIX QR-Code Generator, Horoscope and much more.'
        }
      ]
    }
  },
  data() {
    return {
      sign: "",
      error: "",
      loading: true,
      model: null,
    }
  },
  mounted() {
    this.$store.dispatch('getHoroscopeApi')

    console.log("horoscope", this.horoscope.api)
  },
  watch: {
    'horoscope.api': function () {
      console.log("Change horoscope API", this.horoscope.api)
      this.loading = false
    },
    'horoscope.data': function () {
      console.log("Change horoscope DATA", this.horoscope.data)
      if (this.horoscope.data.text) {
        this.loading = false
      }
    }
  },
  methods: {
    getSign(signId){
      this.error = ""
      this.sign = signId
      if (this.sign && this.sign.length > 2) {
        this.$store.commit('SET_HOROSCOPE_BY_SIGN', [])
        this.$store.dispatch('getHoroscopeBySign', this.normalizeHelper(this.sign))
      } else {
        // this.error = "Type a valid email address."
      }
    },
  }
}
</script>
