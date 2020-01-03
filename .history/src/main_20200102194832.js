import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import router from './router';

import App from './App.vue';
import store from './store/store';

Vue.use(vClickOutside);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
