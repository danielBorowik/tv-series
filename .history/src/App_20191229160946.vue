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
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
