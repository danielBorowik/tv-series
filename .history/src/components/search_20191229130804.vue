<template>
<div>
  <h1>CO JEST KURWA</h1>
  <!-- <input v-model="textInput" @click="search"/> -->
  <searchinput v-model="textInput" @input="search"></searchinput>
  <p v-if="loading">IS LOADING!</p>
  <p>{{ searchResults }}

    <div v-if="searchResults && !loading">
      <p v-for="item in result.data" :key="item.id"> {{item.show.name}} </p>
    </div>

    <!-- <div class="results" v-if="results && !loading && step === 1">
      <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id"
      @click.native="handleModalOpen(item)" />
    </div> -->

</div>
</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import searchinput from './searchinput.vue';

const API = 'http://api.tvmaze.com/search/shows?q=';

export default {
  name: 'main',
  data() {
    return {
      textInput: '',
      searchResults: '',
      loading: '',
    };
  },
  components: {
    searchinput,
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
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  color: green;
}

</style>
