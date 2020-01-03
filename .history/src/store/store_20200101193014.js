import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    watchLaterIds: [],
  },
  mutations: {
    addToWatchLater(state, payload) {
      state.watchLaterIds.push(payload.id);
    },
    deleteFromWatchLater(state, payload) {
      console.log(payload.id);
    }
  },
});
