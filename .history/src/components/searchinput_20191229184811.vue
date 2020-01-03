<template>

  <input  value="to jest komponent" @input="handler"/>

</template>

<script>

export default {
  name: 'searchinput',
  methods: {
    handler(e) {
      this.$emit('input', e.target.value);
    },
  },
};

</script>

<style>

  input {
    margin: 50px auto;
    width: 250px;
    color: white;
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    height: 30px;
    border: 0;
    background: none;
    border-bottom: 1px solid white;
    transition: box-shadow .3s ease-out;

    @media (min-width: 1024px) {
      font-weight: 400;
    }
  }

  input:focus {
    outline: none;
    box-shadow: 0 10px 20px -8px rgba(255,255,255, .5);
  }

  .dark {
    color: #1e3d4a;
    border-bottom-color: #1e3d4a;
  }

  .dark:focus {
    box-shadow: 0 10px 20px -8px rgba(#1e3d4a, .2);
  }
</style>
