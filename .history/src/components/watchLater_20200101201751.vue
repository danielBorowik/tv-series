<template>
<div class="flex-column-wrapper">
  <transition name="modal">
  <modal
  v-if="isModalOpened"
  :show="displayedShow"
  @closeModal="isModalOpened = false">
  </modal>
  </transition>
  <h1> WATCH LATER LIST </h1>
  <searchinput v-model="textInput" @input="search"> </searchinput>

  <!-- decided to remove loader due to extremely low loading time,
  input should be in "inputloading" -->

  <!-- <div class="inputloading">
    <div class="posabsolute"><div v-if="loading" class="lds-ellipsis">
      <div></div><div></div><div></div><div></div></div></div>
  </div> -->

    <div v-if="searchResults && !loading" class="searchResults">
      <searchItem
      v-for="item in searchResults.data"
      :key="item.show.id"
      :show="item.show"
      @click.native="openModal(item.show)"
      >
      </searchItem>
    </div>

</div>
</template>

<script>
export default {

};
</script>

<style>

</style>
