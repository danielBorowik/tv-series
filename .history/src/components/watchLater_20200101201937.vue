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

    <div v-if="searchResults && !loading" class="searchResults">
      <searchItem
      v-for="item in searchResults.data"
      :key="item.show.id"
      :show="item.show"
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

</style>
