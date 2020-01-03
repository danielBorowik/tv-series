import Vue from 'vue';
import VueRouter from 'vue-router';
import search from '../components/search.vue';
import watchLater from '../components/watchLater.vue';

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
];

const router = new VueRouter({
  routes,
});
export default router;
