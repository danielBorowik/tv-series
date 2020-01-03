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
      console.log(watchLaterIds);
    },
    deleteFromWatchLater(state, payload) {
      console.log(payload.id);

      const index = state.watchLaterIds.findIndex(el => el === payload.id);
      console.log(index);

      state.watchLaterIds.splice(index, 1);
    },
  },
});
