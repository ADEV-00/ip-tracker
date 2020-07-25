import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import * as VueGoogleMaps from "vue2-google-maps";
import GmapCluster from "vue2-google-maps/dist/components/cluster";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB0Zmj0_NP24V1zuLurwgtNuhzs - kbhG84",
    libraries: ["places", "visualization"],
  },
  installComponents: true,
});

Vue.component("GmapCluster", GmapCluster);

Vue.prototype.$http = axios.create();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
