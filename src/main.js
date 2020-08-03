import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");