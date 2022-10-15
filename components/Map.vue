<template>
  <div>
    <div v-if="latitude && longitude" id="map-wrap" style="height: 585px;">
      <client-only>
        <l-map :zoom=10
               :center="[`${latitude}`,`${longitude}`]">
          <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
          <l-marker
            :lat-lng="[`${latitude}`,`${longitude}`]"></l-marker>
        </l-map>
      </client-only>

    </div>
    <div v-else
         class="justify-center align-center"
         style="height: 590px; display: flex;">
      <div >
        Loading...
      </div>
    </div>
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
    // Observa resposta do "getIpInformation"
    'ip.data.location': function () {
      if (this.ip.data.location) {
        this.loadMap(this.ip.data.location)
      }
    }
  },
  mounted() {
    // this.$store.dispatch('ip/getIpInformation')
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
      /*console.log(coordinates.latitude, coordinates.longitude);*/
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
