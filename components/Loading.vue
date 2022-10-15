<template>
  <div class="justify-center align-center"
       style="display: flex;"
       :style="`height: ${height};`">
    <div>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["height"]
}
</script>

<style scoped>

</style>
