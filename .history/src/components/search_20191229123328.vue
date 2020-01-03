<template>
<div>
  <h1>CO JEST KURWA</h1>
  <input v-model="textInput" @click="search"/>
  <p>{{ searchResults }}</p>
</div>
</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import input from './input';

const API = 'http://api.tvmaze.com/search/shows?q=';

export default {
  name: 'main',
  data() {
    return {
      textInput: '',
      searchResults: '',
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  color: green;
}

</style>
