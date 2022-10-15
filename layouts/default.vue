<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list>
        <v-list-item>
          <TitleNavbar/>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item
          v-for="(item, i) in apis"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"
                          v-if="true" />
      <TitleNavbar/>
      <v-spacer />
      <v-btn
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
        v-if="isMobile"
        color="light"
        icon
      >
        <v-icon>{{ $vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
      <v-switch
        v-else
        class="pt-6"
        :prepend-icon="$vuetify.theme.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        v-model="$vuetify.theme.dark"
        inset
      ></v-switch>
    </v-app-bar>
    <v-main class="">
      <v-container class="">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="true"
      height="55px"
      app
    >
      <div>
        <small>
          Helper API &copy; {{ new Date().getFullYear() }}
        </small>
      </div>
      <v-spacer/>
      <div>
        <small>
          Made with ❤ by
          <a style="text-decoration: none;"
             href="https://arjos.com.br/"
             target="_blank">
          ARJOS
        </a>
        </small>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
  },
  mounted() {
    // console.log('Break', this.$vuetify.breakpoint.name)
    // this.$store.dispatch('configs/getApiInformation')
  },
  data() {
    return {
      drawer: false,
      loading: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Helper API'
    }
  },
  methods: {
  }
}
</script>
