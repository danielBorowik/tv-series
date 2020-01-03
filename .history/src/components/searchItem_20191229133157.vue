<template>
    <div>
        <p> {{ name }}</p>
        <p> {{ summary }}</p>

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
    this.summary = this.show.summary;
  },
};
</script>

<style>

</style>