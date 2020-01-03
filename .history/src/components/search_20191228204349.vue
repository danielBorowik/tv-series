<template>
<div>
  <h1>CO JEST KURWA</h1>
  <input v-model="textInput" @click="search"/>
  <p>{{ }}</p>
</div>
</template>

<script>
const axios = require('axios');

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
      axios.get('http://api.tvmaze.com/search/shows?q=girls')
        .then((response) => {
          // handle success
          console.log(response);
          return response;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
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
