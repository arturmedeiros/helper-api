<template>
  <v-container fluid>
    <v-row class="py-3" justify="center" align="center">
      <v-col cols="12" sm="12" md="12" shadow="none">
        <v-card outlined class="pa-4">
          <v-card-title class="">
            Welcome to the Vuetify + Nuxt.js template
          </v-card-title>
          <v-card-text>
            <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>

            <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
            <div class="text-xs-right">
              <em><small>&mdash; John Leider</small></em>
            </div>
            <hr class="my-3">
            <a
              href="https://nuxtjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt Documentation
            </a>
            <br>
            <a
              href="https://github.com/nuxt/nuxt.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nuxt GitHub
            </a>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              nuxt
              to="/inspire"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col :cols="(this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm')
                    ? 12 : 6"
             xs="12" sm="12" md="6">
        <v-card>
          <v-img
            color="black"
            height="140px"
            src="https://img.freepik.com/premium-photo/single-red-pushpin-marking-location-australia-map_70287-2109.jpg?w=2000"
          >

            <v-card-title class=" mx-4 mt-6">
              <v-avatar size="62" color="white">
                <img
                  alt="user"
                  src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/0950a51c-edc0-4a08-bb62-c919b4be7c6e.png"
                >
              </v-avatar>
              <p class="ml-5 mt-5 text--black" style="font-size: 1.4em;">
                IP Geolocation
              </p>
            </v-card-title>
          </v-img>

          <v-card-text class="mt-2 ml-4 mr-4">
            <div class="font-weight-bold mb-2">
              Gratuita
            </div>
            <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              nuxt
              to="/inspire"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
