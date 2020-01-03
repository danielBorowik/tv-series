<template>
    <div class="itemWrapper">
        <h2> {{ name }}</h2>
        <div class="photo">
        <img :src="photo">

      </div>
    </div>
</template>

<script>

import image from '../assets/noimg.png';

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
      photo: image,
      name: null,
    };
  },
  mounted() {
    if (this.show.image === null) {
      console.log('jest nulem!');
    } else {
      this.photo = this.show.image.medium;
    }
    this.name = this.show.name;
  },
};
</script>

<style lang="scss" scoped>

.itemWrapper {
  background-color: blue;
  padding: 2rem;
  margin: 1rem;
}

</style>
