<template>
<div>
  <h1>CO JEST KURWA</h1>
  <!-- <input v-model="textInput" @click="search"/> -->
  <searchinput v-model="textInput" @input="search"></searchinput>
  <p>IS LOADING? {{ loading }}</p>
  <p>{{ searchResults }}</p>
</div>
</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import searchinput from './searchinput';

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
  computed: {

  },
  methods: {
    search() {
      axios.get(`${API}${this.textInput}`)
        .then((response) => {
          console.log(response);
          this.searchResults = response;
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

    search: debounce(function() {
      this.loading = true;
      console.log(this.searchValue);
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  color: green;
}

</style>
