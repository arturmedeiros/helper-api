<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="12" shadow="none">
        <v-card outlined style="border-radius: 10px;" class="pa-4">
          <v-card-title class="">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>

            <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
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
             :cols="($vuetify.breakpoint.name === 'xs' || $vuetify.breakpoint.name === 'sm')
                    ? 12 : 6"
             xs="12" sm="12" md="6" shadow="none">
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
  }
}
</script>
