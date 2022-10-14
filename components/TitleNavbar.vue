<template>
  <v-toolbar-title
    class="cursor-pointer"
    router
    exact
    :to="'/'">
    <span style="font-size: 1.2em; font-weight: 600;">
      Helper
    </span>
    <span style="font-size: 1.2em; font-weight: 400;">
        API
    </span>
    <v-badge
      color="green"
      :content="configs.data.api_version"
      class="mr-8 mb-3 ml-4"
      overlap
    />
  </v-toolbar-title>
</template>

<script>
export default {
  name: 'TitleNavbar',
}
</script>

<style scoped>

</style>
