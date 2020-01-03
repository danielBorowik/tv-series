<template>
    <div class="itemWrapper">
        <h2> {{ name }}</h2>
        <div class="photo">
        <img :src="photo">
      </div>
    </div>
</template>

<script>

import noImage from '../assets/noimg.png';

export default {
  name: 'searchItem',
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: noImage,
      name: null,
    };
  },
  mounted() {
    if (this.show.image !== null) this.photo = this.show.image.medium;
    this.name = this.show.name;
  },
};
</script>

<style lang="scss" scoped>

.itemWrapper {
  box-sizing: border-box;
  //background-color: rgba(255,255,255,.2);
  padding: 1rem;
  margin: 2rem;
  min-width: 300px;
  opacity: 0.5;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.photo {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

</style>

    <div class="itemWrapper">
        <h2> {{ name }}</h2>
        <div class="photo">
        <img :src="photo">
      </div>
    </div>
