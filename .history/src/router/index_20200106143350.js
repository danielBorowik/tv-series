import Vue from 'vue';
import VueRouter from 'vue-router';
import search from '../components/search.vue';
import watchLater from '../components/watchLater.vue';
import FourOhFour from '../components/fourOhFour.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'search',
    component: search,
  },
  {
    path: '/watchlater',
    name: 'watchlater',
    component: watchLater,
  },
  {
    path: '/*',
    name: 'FourOhFour',
    component: FourOhFour
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
