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

<style scoped lang="scss">

h1 {
  color: green;
}

.heroImage {
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-image: url('./assets/bgc.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0%;
  }

  .heroImage::after {
    content: '';
    background: rgba(0,0,0, .2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }

</style>
