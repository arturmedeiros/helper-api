<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="6" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="flex-fill">
            <div class="mr-3">
              <v-icon>mdi-map-marker-radius-outline</v-icon>
            </div>
            IP: {{ $store.state.ip.data.ip }}
          </v-card-title>
          <v-card-text>
            <Code type="ip" :data="$store.state.ip.data"/>
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
    this.$store.dispatch('getIpInformation')
  },
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
