import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routes/index';
import store from '@/store/index';

import "@/assets/css/reset.css";
import "@/assets/css/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
