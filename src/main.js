import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import 'leaflet/dist/leaflet.css';
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
import VueSmartWidget from "vue-smart-widget";
import VueYoutube from 'vue-youtube';


Vue.use(VueYoutube);
Vue.use(VueSmartWidget);
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
