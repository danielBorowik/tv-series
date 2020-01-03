<template>
    <div class="itemWrapper">
        <h2> {{ name }}</h2>
        <div class="photo">
        <img :src="photo">

        <button
        v-if="!isInWatchLater"
        @click.stop="addToWatchLater">
        WATCH LATER
        </button>

        <button
        v-else
        @click.stop="deleteFromWatchLater"
        class="alreadyAdded">
        ADDED
        </button>

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
  computed: {
    isInWatchLater() {
      if (this.$store.state.watchLaterIds.includes(this.show.id)) return true;
      return false;
    },
  },
  methods: {
    addToWatchLater() {
      this.$store.commit('addToWatchLater', {
        id: this.show.id,
      });
    },
    deleteFromWatchLater() {
      this.$store.commit('deleteFromWatchLater', {
        id: this.show.id,
      });
    },
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
  padding-bottom: 10px;
}

button {
  background-color: #90131A;
  border: none;
  color: white;
  text-align: center;
  width: 100%;
  height: 48px;
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e50914;
  }
}

.alreadyAdded {
  background-color: #0D7A00;
  position: relative;

  &:hover {
    background-color: #0D7A00;
  }

  &::after {
    content:"\002714";
    // position: absolute;
    // right: 50px;
  }

  &:hover::after {
    content: '\00274C';
  }
}

</style>
