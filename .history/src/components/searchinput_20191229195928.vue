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
    margin: 40px auto;
    margin-bottom: 80px;
    width: 600px;
    color: white;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    height: 80px;
    border: 0;
    background: none;
    border-bottom: 1px solid white;
    transition: box-shadow .3s ease-out;

    @media (max-width: 769) {
      width: 400px
    }
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid #e50914;

  }

  .dark {
    color: #1e3d4a;
    border-bottom-color: #1e3d4a;
  }

  .dark:focus {
    box-shadow: 0 10px 20px -8px rgba(#1e3d4a, .2);
  }
</style>
