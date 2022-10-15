<template>
  <div>
    <div v-if="latitude && longitude" id="map-wrap" style="height: 585px;">
      <client-only style="position: sticky !important; z-index: 1!important;">
        <l-map :zoom=10
               :center="[`${latitude}`,`${longitude}`]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker
            :z-index-offset="1"
            :lat-lng="[`${latitude}`,`${longitude}`]"></l-marker>
        </l-map>
      </client-only>
    </div>
    <Loading v-else height="590px"/>
  </div>
</template>

<script>
export default {
  name: "MapLeaflet",
  data() {
    return {
      latitude: null,
      longitude: null,
    };
  },
  watch: {
    'ip.data.location': function () {
      if (this.ip.data.location) {
        this.loadMap(this.ip.data.location)
      }
    }
  },
  mounted() {
  },
  onBeforeUnmount() {
    let map = document.getElementById("map-wrap")
    if (map) {
      map.remove();
    }
  },
  methods: {
    loadMap(coordinates) {
      this.latitude = coordinates.latitude
      this.longitude = coordinates.longitude
    }
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: 100vh;
}
</style>

<style>
.vue2leaflet-map {
  z-index: 1!important;
}
</style>
