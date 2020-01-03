<template>

  <div id="app">
    <navbar></navbar>
    <background></background>
    <main>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </main>
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

@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap");

* {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  font-family: "Open Sans", sans-serif;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e50914;
  padding-top: 112px;
  overflow-x: hidden;
}

.slide-leave-active,
.slide-enter-active {
  transition: 0.3s;
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  transform: translate(-100%, 0);
}

</style>
