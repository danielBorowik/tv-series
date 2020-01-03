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
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

</style>
