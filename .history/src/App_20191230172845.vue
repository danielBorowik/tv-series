<template>
  <div id="app">
    <navbar></navbar>
    <background></background>
    <transition name="slide" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import background from './components/background.vue';
import navbar from './components/navbar.vue';

export default {
  name: 'App',
  components: {
    background,
    navbar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
@import "../styles/transitions.scss";


body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e50914;
  padding-top: 112px;
  overflow-x:hidden;
}

html {
  overflow-x:hidden;
}

* {
  box-sizing: border-box;
}



</style>
