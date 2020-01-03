<template>

  <div class="flex-column-wrapper">
    <transition name="modal">
      <modal
      v-if="isModalOpened"
      :show="displayedShow"
      @closeModal="isModalOpened = false">
      </modal>
    </transition>
    <h1> WATCH LATER LIST </h1>

      <div class="watchLaterList">
        <searchItem
        v-for="item in $store.state.watchLaterIds"
        :key="item"
        :id="item"
        @click.native="openModal(item.show)"
        >
        </searchItem>
      </div>
  </div>

</template>

<script>
import modal from './modal.vue';


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
  },
  methods: {
    openModal(item) {
      this.displayedShow = item;
      this.isModalOpened = true;
    },
  },
};
</script>

<style>

h1 {
  font-size: 4rem;
  letter-spacing: 0.3rem;
  text-shadow: 0px 0px 8px rgba(229,9,20,0.81);
  padding: 0 2rem;

  @media (max-width: 522px) {
    font-size: 3rem;
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
}

</style>
