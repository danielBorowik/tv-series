<template>

    <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="photo">
      </div>
      <div class="info">
        <h2 class="name">{{ name }}</h2>
        <p class="summary" v-html="summary">
        </p>
        <a :href="link" class=".cl-effect-1" target="blank">See on TVmaze website</a>
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

h2 {
  font-size: 2rem;
}

.outerWrapper {
  position: fixed;
  max-width: 70%;
  height: 60%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f6f6f6;
  z-index: 1;
  border-radius: 30px;
  margin: auto;
  box-shadow: 0 30px 30px -10px rgba(0,0,0, .3);

  @media (max-width: 1024px) {
    max-width: 90%;
    height: 90%;
    top: 0;
    left: 0;
  }
}

.close {
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 30px;
  right: 0;
  top: 0;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &::before,
  &::after {
    position: absolute;
    top: 35px;
    right: 20px;
    content: '';
    width: 40px;
    height: 7px;
    background: #e50914;
    display: block;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    transform: scale(1.1);
  }
}

.innerWrapper {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 50px;

    .photo {
      min-width: 50%;
      margin-right: 20px;
    }
  }

  .photo {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
    margin-right: 50px;

    @media (max-width: 1024px) {
      height: auto;
      margin-right: 0px;
    }

    img {
      height: 100%;
      width: auto;

      @media (max-width: 1024px) {
        height: 100%;
        width: auto;
        min-height: 300px;
      }

    }
  }

  .summary, .name {
    color: black;
  }

  a {
    margin-top: 1rem;
    display: inline-block;
    outline: none;
    text-decoration: none;
    letter-spacing: 0.1rem;
    font-weight: 700;
    text-shadow: 0 0 1px rgba(255,255,255,0.3);
    font-size: 1.5rem;
    color: #e50914;
    position: relative;
  }

  a:hover,
  a:focus {
    outline: none;
  }

  a::before {
    position: absolute;
    content: '[';
    transform: translateX(-10px);

  }

  a::after {
    position: absolute;
    content: ']';
  }

  a:hover::before,
  a:hover::after,
  a:focus::before,
  a:focus::after {
    opacity: 1;
  }

  a:hover::before,
  a:focus::before {
    transform: translateX(-30px);
  }

  a:hover::after,
  a:focus::after {
    transform: translateX(20px);
  }

  a::before,
  a::after {
    color: red;
    display: inline-block;
    opacity: 0;
    transition: transform 0.3s, opacity 0.2s;
  }

  a::before,
  a::after {
    @media (max-width: 474px) {
      display: none;
    }
  }

  .summary {
    max-height: 290px;
    overflow-y: auto
  }
}
</style>
