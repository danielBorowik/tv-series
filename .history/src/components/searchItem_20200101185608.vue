<template>
    <div class="itemWrapper">
        <h2> {{ name }}</h2>
        <div class="photo">
        <img :src="photo">
        <button>WATCH LATER</button>
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
  background-color: rgba(255,255,255,.2);
  border-radius: 25px;
  padding: 1rem 2rem;
  margin: 2rem;
  width: 300px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    box-sizing: border-box;
    background-color: rgba(255,255,255,.3);
    border-radius: 25px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    opacity: 0;
    //transition: opacity .2s ease-in-out;
  }

  &:hover::after{
    opacity: 1;
  }

  &:hover{
    background-color: rgba(255,255,255,.3);
  }
}

.photo {
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
}

h2 {
  font-size: 2rem;
  color: white;
  letter-spacing: 0.1rem;
  padding-bottom: 20px;
}

button {
  background-color: #e50914;
  border: none;
  color: white;
  text-align: center;
  width: 100%;
  height: 3rem;
}

</style>
