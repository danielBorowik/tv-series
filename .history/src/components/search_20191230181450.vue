<template>

<div class="flex-column-wrapper">
  <transition name="modal">
  <modal v-if="isModalOpened" :show="displayedShow" @closeModal="isModalOpened = false"> </modal>
  </transition>
  <h1> SEARCH FOR A SHOW </h1>
  <div class="inputloading">
    <searchinput v-model="textInput" @input="search"> </searchinput>
    <div class="posabsolute"><div " class="lds-ellipsis">
      <div></div><div></div><div></div><div></div></div></div>
  </div>

  <transition name="fade">
    <div v-if="searchResults && !loading" class="searchResults">
      <searchItem
      v-for="item in searchResults.data"
      :key="item.show.id"
      :show="item.show"
      @click.native="openModal(item.show)"
      >
      </searchItem>
    </div>
  </transition>
</div>

</template>

<script>
import debounce from 'lodash.debounce';
import axios from 'axios';
import searchinput from './searchinput.vue';
import searchItem from './searchItem.vue';
import modal from './modal.vue';

const API = 'http://api.tvmaze.com/search/shows?q=';

export default {
  name: 'search',
  data() {
    return {
      textInput: '',
      searchResults: [],
      loading: '',
      isModalOpened: false,
      displayedShow: '',
    };
  },
  components: {
    searchinput,
    searchItem,
    modal,
  },
  methods: {
    search: debounce(function () {
      this.loading = true;
      axios.get(`${API}${this.textInput}`)
        .then((response) => {
          console.log(response);
          this.searchResults = response;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
    openModal(item) {
      this.displayedShow = item;
      this.isModalOpened = true;
    },
  },
};

</script>

<style lang="scss" scoped>

h1 {
  font-size: 4rem;
  letter-spacing: 0.3rem;
  text-shadow: 0px 0px 8px rgba(229,9,20,0.81);
  padding: 0 2rem;

  @media (max-width: 522px) {
    font-size: 3rem;
    padding: 0 1rem;
  }
}

.flex-column-wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  text-align: center;
  overflow: hidden;
}

.searchResults {
  display: flex;
  justify-content: center;
  justify-items: center;
  text-align: center;
  flex-wrap: wrap;
}

.inputloading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.posabsolute {
  position: absolute;
  top: 150px;
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>
