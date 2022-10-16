<template>
  <v-toolbar-title
    class="cursor-pointer"
    @click="$router.push('/')"
  >
    <span style="font-size: 1.2em; font-weight: 600;">
      Helper
    </span>
    <span style="font-size: 1.2em; font-weight: 400;">
      API
    </span>
    <v-badge
      color="green"
      :content="$store.state.configs.data.api_version"
      class="mr-8 mb-3 ml-4"
      overlap
    />
  </v-toolbar-title>
</template>

<script>
export default {
  name: 'TitleNavbar',
  mounted() {
    // console.log("API SSR: ", this.normalizeHelper(this.$store.state.configs.data))
  },
  data() {
    return {
      info_api: []
    }
  },
  /* SSR Data Fetch */
  async fetch() {
    this.info_api = await fetch(this.$store.state.configs.baseUrl)
      .then(res => res.json())
      .then((response) => {
        this.$store.commit('SET_API_INFORMATION', response)
      })
  },
  /* SSR Meta SEO */
}
</script>

<style scoped>

</style>
