<template>
<div>
  <h1>SEARCH FOR A SHOW</h1>
  <searchinput v-model="textInput" @input="search"></searchinput>
  <p v-if="loading">IS LOADING!</p>
    <div v-if="searchResults && !loading">
      <searchItem
      v-for="item in searchResults.data"
      :key="item.show.name"
      :show="item.show"
      @click.native="openModal(item)"
      >
      </searchItem>
    </div>

    <!-- <div class="results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id"
      @click.native="handleModalOpen(item)" />
    </div> -->
<Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false" />
</div>
</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import searchinput from './searchinput.vue';
import searchItem from './searchItem.vue';


const API = 'http://api.tvmaze.com/search/shows?q=';

export default {
  name: 'main',
  data() {
    return {
      textInput: '',
      searchResults: '',
      loading: '',
      isModalOpened: false,
      showedItem: '',
    };
  },
  components: {
    searchinput,
    searchItem,
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
      this.isModalOpened = true;
      this.modalItem = item;
    },
  },
};


</script>

<style scoped lang="scss">

h1 {
  color: green;
}

</style>
