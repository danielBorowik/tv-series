<template>
<div>
  <h1>CO JEST KURWA</h1>
  <input v-model="textInput" />
</div>
</template>

<script>

export default {
  name: 'main',
  data () {
    return {
    textInput: '',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1 {
  color: green;
}

</style>
