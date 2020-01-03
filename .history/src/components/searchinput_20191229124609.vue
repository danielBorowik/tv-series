<template>

  <input  value="to jest komponent" @input="handler"/>

</template>

<script>

export default {
  name: 'searchinput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handler(e) {
      this.$emit('input', e.target.value);
    },
  },
};

</script>

<style>

</style>
