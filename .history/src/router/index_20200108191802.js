import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '../components/Search.vue';
import WatchLater from '../components/WatchLater.vue';
import FourOhFour from '../components/FourOhFour.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/watchlater',
    name: 'watchlater',
    component: WatchLater,
  },
  {
    path: '/*',
    name: 'FourOhFour',
    component: FourOhFour,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
