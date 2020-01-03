<template functional>
  <div class="background"> </div>
</template>

<style lang="scss" scoped>
  .background {
    position: fixed;
    top: 0;
    z-index: -100;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/bgc.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0%;
  }

  .background::after {
    content: '';
    background: rgba(0,0,0, .4);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;
    width: 100%;
    height: 100vh;
  }
</style>
