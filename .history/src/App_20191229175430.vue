<template>
  <div id="app">
    <background></background>
    <router-view/>
  </div>
</template>

<script>
import background from './components/background.vue';

export default {
  name: 'App',
  components: {
    background,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

* {
  box-sizing: border-box;
}

</style>
