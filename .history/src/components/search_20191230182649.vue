<template>

<div class="flex-column-wrapper">
  <transition name="modal">
  <modal v-if="isModalOpened" :show="displayedShow" @closeModal="isModalOpened = false" @click.stop> </modal>
  </transition>
  <h1> SEARCH FOR A SHOW </h1>
  <searchinput v-model="textInput" @input="search"> </searchinput>

  <!-- decided to remove loader due to extremely low loading time,
  input should be in "inputloading" -->

  <!-- <div class="inputloading">
    <div class="posabsolute"><div v-if="loading" class="lds-ellipsis">
      <div></div><div></div><div></div><div></div></div></div>
  </div> -->

  <transition name="fade">
    <div v-if="searchResults && !loading" class="searchResults">
      <searchItem
      v-for="item in searchResults.data"
      :key="item.show.id"
      :show="item.show"
      @click.native="openModal(item.show)"
      >
      </searchItem>
    </div>
  </transition>
</div>

</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import searchinput from './searchinput.vue';
import searchItem from './searchItem.vue';
import modal from './modal.vue';

const API = 'http://api.tvmaze.com/search/shows?q=';

export default {
  name: 'search',
  data() {
    return {
      textInput: '',
      searchResults: [],
      loading: '',
      isModalOpened: false,
      displayedShow: '',
    };
  },
  components: {
    searchinput,
    searchItem,
    modal,
  },
  methods: {
    search: debounce(function () {
      this.loading = true;
      axios.get(`${API}${this.textInput}`)
        .then((response) => {
          console.log(response);
          this.searchResults = response;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
    openModal(item) {
      this.displayedShow = item;
      this.isModalOpened = true;
    },
  },
};

</script>

<style lang="scss" scoped>

// @import "../styles/transitions.scss";
// loader not included

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

.searchResults {
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
  flex-wrap: wrap;
}

</style>
