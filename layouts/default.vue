<template>
  <v-app>
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
          v-for="(item, i) in items"
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
      <v-switch
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
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted() {
    // console.log('Break', this.$vuetify.breakpoint.name)
    this.$store.dispatch('configs/getApiInformation')
    console.log('this.global', this.global)
  },
  data() {
    return {
      drawer: false,
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
}
</script>
