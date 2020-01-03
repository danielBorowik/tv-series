<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import background from 'from './components/searchItem.vue';';


export default {
  name: 'App',
  components: {
    background,
  }
};
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
