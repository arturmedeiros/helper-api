<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="6" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-earth</v-icon>
            </div>
            IP: {{ this.$store.state.ip.data.ip }}
          </v-card-title>
          <v-card-text>
            <Code type="ip"/>
          </v-card-text>
          <v-card-text>
            <div class="text-xs-right">
              <em><small>&mdash; Free API</small></em>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="6" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <MapLeaflet/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AvatarWithTextInline from "@/components/cards/AvatarWithTextInline";
import CardHomeDefault from "@/components/CardHomeDefault";
import MapLeaflet from "~/components/Map";

export default {
  name: 'IP',
  components: {
    MapLeaflet,
    AvatarWithTextInline,
    CardHomeDefault
  },
  data() {
    return {
      info: []
    }
  },

  mounted() {
    if  (!this.$store.state.ip.data.ip) {
      this.$store.dispatch('ip/getIpInformation')
    }
  },

  /* SSR Data Fetch */
  // async fetch() {
  //   this.info = await fetch(this.configs.baseUrl)
  //     .then(res => res.json())
  //     .then((response) => {
  //       this.$store.commit('ip/SET_IP_INFORMATION', response)
  //     })
  // },
  head() {
    return {
      title: "IP Geolocation - Helper API",
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
