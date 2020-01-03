<template>

    <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="photo">
      </div>
      <div class="summary">
        <h2 class="name">{{ name }}</h2>
        <p class="summary" v-html="summary">
        </p>
        <a :href="link">SEE ON TVMAZE WEBSITE</a>

      </div>
    </div>
    <div class="close" @click="$emit('closeModal')" />
  </div>

</template>
<script>
import noImage from '../assets/noimg.png';

export default {
  name: 'modal',
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
      summary: null,
      link: null,
    };
  },
  mounted() {
    if (this.show.image !== null) this.photo = this.show.image.medium;
    this.name = this.show.name;
    this.link = this.show.url;
    if (this.show.summary) {
      this.summary = this.show.summary
        .substring(0, this.show.summary.length - 4)
        .substring(3, this.show.summary.length);
    }
  },
};
</script>

<style lang="scss" scoped>

*{
    box-sizing: border-box;
}
  .outerWrapper {
    background: #f6f6f6;
    max-width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    @media (min-width: 1024px) {
      max-width: 70%;
      height: 60%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 30px 30px -10px rgba(0,0,0, .3);
    }
  }

  .close {
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 30px;
    right: 0;
    top: 0;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      top: 30px;
      right: 20px;
      content: '';
      width: 20px;
      height: 2px;
      background: black;
      display: block;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  .innerWrapper {
    display: flex;
    min-height: 100%;
    padding: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;

      .photo {
        min-width: 50%;
        margin-right: 20px;
      }
    }

    .photo {
      width: 100%;
      height: 100%;
      background: black;
      text-align: center;

      img {
        height: 100%;
        width: auto;
      }
    }

    .summary {
      color: #333;
    }

    .name {
       color: #1e3d4a;
    }
  }
</style>
