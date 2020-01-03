<template>
<div>
  <h1>SEARCH FOR A SHOW</h1>
  <searchinput v-model="textInput" @input="search"></searchinput>
  <p v-if="loading">IS LOADING!</p>
    <div v-if="searchResults && !loading">
      <searchItem
      v-for="item in searchResults.data"
      :key="item.show.id"
      :show="item.show"
      @click.native="openModal(item.show)"
      >
      </searchItem>
    </div>

    <!-- <div class="results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id"
      @click.native="handleModalOpen(item)" />
    </div> -->
<modal v-if="isModalOpened" :show="displayedShow" @closeModal="isModalOpened = false"> </modal>
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
      searchResults: '',
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
  computed: {

  },
  methods: {
    search: debounce(function () {
      this.loading = true;
      axios.get(`${API}${this.textInput}`)
        .then((response) => {
          console.log(response);
          console.log(response.data[0].show.name);
          this.searchResults = response;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
    openModal(item) {
      console.log(item);
      this.displayedShow = item;
      this.isModalOpened = true;
    },
  },
};

</script>

<style lang="scss">

h1 {
  color: green;
}

</style>
