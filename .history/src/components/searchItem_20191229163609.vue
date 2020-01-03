<template>
    <div class="itemWrapper">
        <h2> {{ name }}</h2>
        <div class="photo">
        <img :src="photo">
      </div>
    </div>
</template>

<script>
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
      photo: null,
      name: null,
    };
  },
  mounted() {
    if (this.show.image.medium) {
      this.photo = this.show.image.medium;
    } else {
      this.photo = '../assets/noimg.png';
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
