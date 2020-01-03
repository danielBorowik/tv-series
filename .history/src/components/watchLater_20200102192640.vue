<template>

  <div class="flex-column-wrapper">
    <transition name="modal">
      <modal v-if="isModalOpened" :show="displayedShow" @closeModal="isModalOpened = false"></modal>
    </transition>
    <h1>WATCH LATER LIST</h1>
    <h2 v-if="$store.state.watchLaterIds.length === 0">
      NO SERIES IN
      <br />
      WATCH LATER :(
    </h2>
    <transition-group name="list" class="watchLaterList">
      <watchlateritem
        v-for="item in $store.state.watchLaterIds"
        :key="item"
        :show="item"
        @openModal="openModal($event)"
      ></watchlateritem>
    </transition-group>
  </div>

</template>

<script>

import modal from './modal.vue';
import watchlateritem from './watchLaterItem.vue';

export default {
  name: 'watchlater',
  data() {
    return {
      isModalOpened: false,
      displayedShow: '',
    };
  },
  components: {
    modal,
    watchlateritem,
  },
  methods: {
    openModal(show) {
      this.displayedShow = show;
      this.isModalOpened = true;
    },
  },
};

</script>

<style lang="scss" scoped>

h1,
h2 {
  font-size: 4rem;
  letter-spacing: 0.3rem;
  text-shadow: 0px 0px 8px rgba(229, 9, 20, 0.81);
  padding: 0 2rem;

  @media (max-width: 522px) {
    font-size: 3rem;
    padding: 0 1rem;
  }
}

h2 {
  font-size: 2.5rem;
  margin-top: 4rem;
  text-align: center;

  @media (max-width: 522px) {
    font-size: 2rem;
    padding: 0 1rem;
  }
}

.flex-column-wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
  overflow: hidden;
}

.watchLaterList {
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
  flex-wrap: wrap;
  position: relative;
}

.list-leave-active {
  opacity: 0;
  position: absolute;
}

.list-move {
  transition: transform 0.4s ease-in-out;
}
</style>
