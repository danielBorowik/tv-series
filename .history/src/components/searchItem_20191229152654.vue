<template>
    <div>
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
      summary: null,
    };
  },
  mounted() {
    this.photo = this.show.image.medium;
    this.name = this.show.name;
  },
};
</script>

<style>

</style>
