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

@import "../styles/a.scss";
@import "../styles/close.scss";

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
  z-index: 6;
  border-radius: 30px;
  margin: auto;
  box-shadow: 0 30px 30px -10px rgba(0,0,0, .3);

  @media (max-width: 1024px) {
    max-width: 90%;
    height: calc(95vh - 110px);
    top: 110px;
    left: 0;
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
      }

    }
  }

  .summary, .name {
    color: black;
  }

  .summary {
    max-height: 290px;
    overflow-y: auto
  }
}

a::before,
a::after {
    @media (max-width: 474px) {
        display: none;
    }
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.4s ease-in-out;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: translateY(50%);
}

</style>
