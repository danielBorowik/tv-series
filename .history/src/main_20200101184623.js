import Vue from 'vue';
import Vuex from 'vuex';
import vClickOutside from 'v-click-outside';
import router from './router';

import App from './App.vue';

Vue.use(vClickOutside);
Vue.use(Vuex);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
