<template>
  <section>
    <div class="flex-column-wrapper">

      <header>
        <h1>SEARCH FOR A SHOW</h1>
      </header>

      <searchinput v-model="textInput" @input="search"></searchinput>

      <h2 v-if="noMatchesDisplay">NO MATCHES FOUND :(</h2>

      <!-- decided to remove loader due to extremely low loading time,
      if there is a need to restore it, put input in ".inputloading"-->

      <!-- <div class="inputloading">
    <div class="posabsolute"><div v-if="loading" class="lds-ellipsis">
      <div></div><div></div><div></div><div></div></div></div>
      </div>-->

      <div v-if="searchResults && !loading" class="searchResults">
        <searchItem
          v-for="item in searchResults.data"
          :key="item.show.id"
          :show="item.show"
          @click.native="openModal(item.show)"
          @closeModal="isModalOpened = false"
        ></searchItem>
      </div>

      <transition name="modal">
        <modal
        v-if="isModalOpened"
        :show="displayedShow"
        @closeModal="isModalOpened = false">
        </modal>
      </transition>

    </div>
  </section>
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
  computed: {
    noMatchesDisplay() {
      if (
        (this.searchResults.length === 0
          || this.searchResults.data.length === 0)
        && this.textInput !== ''
        && this.loading === false
      ) return true;
      return false;
    },
  },
  components: {
    searchinput,
    searchItem,
    modal,
  },
  methods: {
    search: debounce(function () {
      this.loading = true;
      axios
        .get(`${API}${this.textInput}`)
        .then((response) => {
          this.searchResults = response;
          this.loading = false;
        })
        // eslint-disable-next-line no-unused-vars
        .catch((error) => {
          // no console log for production
          // console.log(error);
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

.searchResults {
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
  flex-wrap: wrap;
}

</style>
