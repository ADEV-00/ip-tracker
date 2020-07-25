<template>
  <GmapMap
    :center="{ lat: parseFloat(data.lat), lng: parseFloat(data.lon) }"
    :zoom="this.zoom"
    ref="map"
    map-type-id="roadmap"
    style="width: 100%; height: 100%"
    :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      gestureHandling: 'cooperative',
      fullscreenControl: false,
      disableDefaultUI: false,
      styles: mapStyle,
    }"
  >
    <GmapMarker
      :position="
        google &&
          new google.maps.LatLng(parseFloat(data.lat), parseFloat(data.lon))
      "
      :clickable="true"
      :draggable="false"
      @click="this.zoom = 15"
    />
  </GmapMap>
</template>

<script>
import { mapStyles } from "../gMaps/GmapsStyle.js";
import { gmapApi } from "vue2-google-maps";
export default {
  name: "Gmaps",
  data() {
    return {
      mapStyle: mapStyles,
      zoom: 15,
    };
  },
  props: ["data"],
  computed: {
    google: gmapApi,
  },
};
</script>

<style lang="scss"></style>
