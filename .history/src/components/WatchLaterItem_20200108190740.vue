<template>
  <div class="itemWrapper" @click="openModal">
    <h2>{{ name }}</h2>
    <div class="photo">
      <img :src="photo" alt="tv series image"/>
    </div>
    <button @click.stop="deleteFromWatchLater" class="alreadyAdded">ADDED</button>
  </div>
</template>

<script>
import axios from 'axios';
import noImage from '../assets/noimg.png';

const API = 'https://api.tvmaze.com/shows/';

export default {
  name: 'watchlateritem',
  props: {
    show: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      photo: noImage,
      name: null,
      link: '',
      id: '',
      summary: '',
    };
  },
  computed: {
    isInWatchLater() {
      if (this.$store.state.watchLaterIds.includes(this.show.id)) return true;
      return false;
    },
  },
  methods: {
    deleteFromWatchLater() {
      this.$emit('closeModal');
      this.$store.commit('deleteFromWatchLater', {
        id: this.id,
      });
    },
    openModal() {
      const show = {
        image: {
          medium: this.photo,
        },
        name: this.name,
        url: this.link,
        summary: this.summary,
      };
      this.$emit('openModal', show);
    },
  },
  mounted() {
    axios
      .get(`${API}${this.show}`)
      .then((response) => {
        this.name = response.data.name;
        if (response.data.image !== null) this.photo = response.data.image.medium;
        this.link = response.data.url;
        this.id = response.data.id;
        this.summary = response.data.summary;
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // no console log for production
        // console.log(error);
      });
  },
};

</script>

<style lang="scss" scoped>

.itemWrapper {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
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
  padding-bottom: 100px;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  &::after {
    content: "";
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 25px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
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
  background-color: #90131a;
  border: none;
  color: white;
  text-align: center;
  width: 90%;
  height: 48px;
  margin-top: 1rem;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  &::before {
    content: "";
    box-sizing: border-box;
    background-color: #e50914;
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }
}

.alreadyAdded {
  background-color: #0d7a00;

  &:hover::before {
    opacity: 0;
  }

  &:hover {
    background-color: #0d7a00;
  }

  &::after {
    box-sizing: border-box;
    content: "\002714";
    display: inline-block;
    width: 20px;
    text-align: center;
    padding-left: 4px;
  }

  &:hover::after {
    content: "\00274C";
    padding-left: 0px;
  }
}

</style>
